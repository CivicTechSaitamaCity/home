# シビックテックさいたま ホームページ

公式サイト: https://www.civictechsaitama.com/

このリポジトリは、シビックテックさいたまのWebサイトを管理するためのNuxtプロジェクトです。

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

- Nuxt 4 / Vue 3 ベースのサイト
- `@nuxt/content` を用いたMarkdown中心のコンテンツ管理
- 静的サイト生成（SSG）を前提に運用

### 主な利用技術

- `nuxt` `4.4.2`
- `@nuxt/content` `3.x`
- `@nuxt/image` `2.x`
- `sass`
- `vue-gtag-next`
- `embla-carousel-vue` / `embla-carousel-autoplay`

### コンテンツ管理

- `content/` 配下のMarkdownをもとにページを生成
- スキーマは `content.config.ts` で管理
- 代表的なコンテンツ配置:
  - `content/message.md`
  - `content/projects.md`
  - `content/vision.md`
  - `content/data/`（イベント・活動ログ）

### ビルド時処理

- `npm run generate` / `yarn generate` で `scripts/generate.mjs` を経由して静的生成
- 生成時に `nuxt.config.ts` のフックで `public/sitemap.xml` を更新
- `public/CNAME` を参照してサイトURLを解決

## 開発方法

### 前提環境

- Node.js `24.14.0`（`.node-version`）
- npm または yarn（`packageManager` は yarn 1 系）

### セットアップ

```bash
yarn install
```

npmを使う場合:

```bash
npm install
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

### 型チェック

```bash
yarn typecheck
```

### Lint

型チェックとフォーマット検証をまとめて実行します。

```bash
yarn lint
```

### 自動整形

HTML、Markdown、CSS、JavaScript、TypeScript などを Prettier で整形します。

```bash
yarn format
```

整形差分の確認だけをしたい場合:

```bash
yarn format:check
```

### 静的サイト生成

```bash
yarn generate
```

### 生成物のローカル確認

```bash
yarn preview
```

## よく使う更新フロー

1. `content/` 配下のMarkdownを追加・修正
2. `yarn dev` で表示確認
3. `yarn lint` で型チェックとフォーマット検証
4. 必要に応じて `yarn generate` で生成結果を確認
5. コミット・デプロイ
