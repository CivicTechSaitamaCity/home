# Nuxt Content -> Astro 移植ノウハウ集

最終更新: 2026-04-30

このドキュメントは、Nuxt Content ベースの Markdown サイトを Astro へ移植するときの実務ノウハウをまとめたものです。
人間が読みやすい説明と、AI が手順化しやすい構造化情報を同時に載せています。

---

## 1. 先に結論（最短ルート）

1. Markdown の保存場所はそのまま維持する（例: `content/`）。
2. Astro 側で `import.meta.glob()` に置き換えて読み込む。
3. Nuxt の `queryContent` / `ContentDoc` 前提ロジックは廃止する。
4. 一覧ページと詳細ページを分離し、詳細は `getStaticPaths()` で静的生成する。
5. 旧 frontmatter の日付キーを棚卸しし、表示ルールを Astro 側で関数化する。
6. `yarn dev` -> `yarn typecheck` -> `yarn build` の順で検証する。

---

## 2. Nuxt Content と Astro の対応表

| Nuxt Content での考え方 | Astro での置き換え | 補足 |
| --- | --- | --- |
| `content/` をデータソースにする | 同じ `content/` を維持 | コンテンツ移行コストを最小化 |
| `queryContent()` で絞り込み | `import.meta.glob()` + JS の `filter/sort` | 型を自前で定義する |
| `<ContentDoc>` で描画 | `import.meta.glob()` で得た `Content` コンポーネントを描画 | `const PageContent = entry.Content; <PageContent />` |
| 動的ページ生成 | `getStaticPaths()` | SSG 前提で URL を確定 |
| 並び替え・日付条件 | `compareDesc` などのヘルパー関数 | 仕様を関数に集約して回帰しやすくする |

---

## 3. 実装パターン（このリポジトリで有効だった形）

### 3-1. Markdown の一括読込

```ts
const renderedModules = import.meta.glob<MarkdownModule>("../../../content/**/*.md", {
  eager: true,
});

const rawModules = import.meta.glob<string>("../../../content/**/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});
```

ポイント:

- `renderedModules` は描画用 (`Content`)。
- `rawModules` は見出し抽出などテキスト処理用。
- 1 回のビルドで全部解決できるため、SSG と相性が良い。

### 3-2. frontmatter + 見出しのフォールバック

表示タイトルは、以下の優先順位で決めると壊れにくいです。

1. Markdown 本文の先頭見出し
2. frontmatter の `title`
3. slug 末尾

この戦略により、過去記事で `title` が欠けていても一覧表示が破綻しません。

### 3-3. 記事種別の分離（news / event / report）

frontmatter の日付キーを使ってカテゴリ化します。

- News: `date` と `eventDate` の組み合わせ
- Event: `eventDate` を主キー
- Report: `reportDate` を主キー

キーが混在している古い記事でも、条件式を関数に閉じ込めれば移行後の表示仕様を一元管理できます。

### 3-4. 詳細ページの静的ルート生成

```ts
export const getStaticPaths = async () =>
  getDataEntries().map((entry) => ({
    params: {
      slug: entry.slug.slice(1).join("/"),
    },
    props: {
      entry,
    },
  }));
```

ポイント:

- `data/...` 配下だけを対象にすると、固定ページと記事ページの責務が分離しやすい。
- 旧 URL 構造を保ちたいときは、`slug` 設計を最初に固定する。

---

## 4. 典型的な落とし穴

1. Nuxt の API 名を Astro 側でそのまま探してしまう。
   - 例: `queryContent` / `ContentDoc` は Astro では直接使わない。
2. frontmatter の日付フォーマットが揺れてソート順が崩れる。
   - 文字列比較を使う場合、`YYYY-MM-DD` に統一する。
3. タイトル取得元を frontmatter のみにしてしまう。
   - 本文見出しフォールバックを入れると欠損に強い。
4. 動的ルートの切り方を後回しにして URL 互換を失う。
   - 既存公開 URL がある場合は最優先で互換性チェック。
5. 検証を `dev` の見た目確認だけで終える。
   - `typecheck` と `build` を必ず通す。

---

## 5. 検証チェックリスト（人間向け）

- [ ] 旧 `content/` の全 Markdown が Astro 側で参照される。
- [ ] 一覧（News / Event / Report）の件数が移行前後で一致する。
- [ ] 日付順が移行前後で一致する。
- [ ] 詳細ページ URL が旧サイトと互換、またはリダイレクト方針が定義済み。
- [ ] frontmatter 欠損記事でタイトルが崩れない。
- [ ] `yarn dev` で主要ページ表示確認。
- [ ] `yarn typecheck` が通る。
- [ ] `yarn build` が通る。
- [ ] 生成物に `sitemap.xml` / `robots.txt` が含まれる。

---

## 6. AI 作業用サマリー（構造化）

```yaml
migration_goal:
  from: nuxt-content
  to: astro-ssg
  keep_markdown_location: content/

source_of_truth:
  markdown_dir: content/**/*.md
  static_assets: public/

core_replacements:
  - nuxt: queryContent
    astro: import.meta.glob + filter/sort
  - nuxt: ContentDoc
    astro: entry.Content component rendering

routing:
  listing_pages:
    - /news
    - /events
    - /report
  detail_page:
    - /data/[...slug]
    - generated_by: getStaticPaths

classification_rules:
  news:
    filter: date > 2020-01-01
    sort_keys: [eventDate desc, date desc]
  event:
    filter: eventDate > 2020-01-01
    sort_keys: [eventDate desc]
  report:
    filter: reportDate > 2020-01-01
    sort_keys: [reportDate desc]

title_fallback_order:
  - first_heading
  - frontmatter.title
  - slug_tail

verification_commands:
  - yarn dev
  - yarn typecheck
  - yarn build
```

---

## 7. AI へ依頼するときのテンプレート

以下をそのまま AI に渡すと、作業指示として解釈しやすくなります。

```md
目的:
Nuxt Content サイトを Astro へ移植する。Markdown は content/ に残す。

要件:
- queryContent / ContentDoc を使わずに実装する
- import.meta.glob で Markdown を収集する
- 一覧ページ (news/events/report) と詳細ページ (data/[...slug]) を作る
- frontmatter 欠損時もタイトルが出るようフォールバックを実装する
- yarn typecheck と yarn build が通ること

納品物:
- 変更ファイル一覧
- 主要ロジックの説明
- 検証結果
- 残課題（あれば）
```

---

## 8. このリポジトリで見るべき実装箇所

- コンテンツ読込・分類ロジック: `astro/src/lib/content.ts`
- トップ固定セクション描画: `astro/src/components/MarkdownSection.astro`
- 一覧ページ:
  - `astro/src/pages/news.astro`
  - `astro/src/pages/events.astro`
  - `astro/src/pages/report.astro`
- 詳細ページ（静的生成）: `astro/src/pages/data/[...slug].astro`
- ビルド後処理（sitemap/robots）: `astro/scripts/postbuild.mjs`

上記の構成をテンプレートとして使えば、Nuxt Content 由来の Markdown サイトを段階的に Astro へ載せ替えできます。
