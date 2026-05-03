# シビックテックさいたま ホームページ

公式サイト: https://www.civictechsaitama.com/

このリポジトリは、シビックテックさいたまのWebサイトを管理するためのAstroプロジェクトです。

## シビックテックさいたまについて

シビックテックさいたまは、市民・行政・地域コミュニティと連携しながら、
デジタル技術を活用して地域課題に取り組むコミュニティです。

このサイトでは、主に以下の情報を発信します。

- 活動メッセージ
- プロジェクト紹介
- イベント情報
- レポート・ニュース

## 技術的要素のまとめ

### アーキテクチャ

- Astro 5 ベースの静的サイト
- `content/` 配下のMarkdownを `import.meta.glob()` で読み込む構成
- 静的サイト生成（SSG）を前提に運用

### 主な利用技術

- `astro` `5.x`
- `@astrojs/check`
- `typescript`

### コンテンツ管理

- `content/` 配下のMarkdownをもとにページを生成
- コンテンツの読み込みと並び順は `astro/src/lib/content.ts` で管理
- 代表的なコンテンツ配置:
	- `content/message.md`
	- `content/projects.md`
	- `content/vision.md`
	- `content/data/`（イベント・活動ログ）

### ビルド時処理

- ルートの `yarn build` は `astro/` 配下のAstroアプリを実行
- ビルド成果物は `dist/` に出力
- ビルド後に `astro/scripts/postbuild.mjs` で `sitemap.xml` と `robots.txt` を生成
- `public/CNAME` を参照してサイトURLを解決
- `public/` 配下の静的HTMLや画像はそのまま `dist/` にコピー

## 開発方法

### 前提環境

- Node.js `24.14.0`（`.node-version`）
- yarn 1 系（`packageManager` を参照）

### セットアップ

```bash
yarn install
```

### ローカル開発

```bash
yarn dev
```

ブラウザで `http://localhost:3000` を開いて確認します。

### 本番ビルド

```bash
yarn build
```

### 静的サイト生成

```bash
yarn generate
```

### 生成物のローカル確認

```bash
yarn preview
```

### 型チェック

```bash
yarn typecheck
```

## よく使う更新フロー

1. `content/` 配下のMarkdownを追加・修正
2. `yarn dev` で表示確認
3. 必要に応じて `yarn build` または `yarn generate` で生成結果を確認
4. コミット・デプロイ
