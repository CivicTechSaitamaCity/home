---
name: design-brushup
description: "サイトデザインのブラッシュアップ・視覚的改善・レイアウト調整・CSS修正・Astroコンポーネントのスタイリング。Use when: improving design, styling, layout, visual polish, CSS, colors, typography, spacing, responsive, mobile."
---

# design-brushup — サイトデザインブラッシュアップ

## 概要

このスキルは `otkzh/home` AstroサイトのUIデザインを改善・洗練するための手順と制約を定義します。

## 対象ファイル

| ファイル                                     | 役割                                                        |
| -------------------------------------------- | ----------------------------------------------------------- |
| `astro/src/styles/global.css`                | サイト全体のスタイル（CSS変数・レイアウト・コンポーネント） |
| `astro/src/components/Header.astro`          | ヘッダー・ナビゲーション                                    |
| `astro/src/components/Footer.astro`          | フッター                                                    |
| `astro/src/components/TopSlider.astro`       | トップページのヒーロースライダー                            |
| `astro/src/components/NewsList.astro`        | ニュース一覧                                                |
| `astro/src/components/EventGrid.astro`       | イベント一覧グリッド                                        |
| `astro/src/components/MarkdownSection.astro` | Markdown本文レンダリング                                    |
| `astro/src/layouts/BaseLayout.astro`         | 全ページ共通レイアウト                                      |

## デザイントークン（CSS変数）

`global.css` の `:root` で定義。変更する場合は必ずここを更新する。

```css
:root {
  --shell-width: 1000px; /* コンテンツ最大幅 */
  --text: #000; /* 本文色 */
  --muted: #444; /* 補助テキスト色 */
  --border: #d9d9d9; /* ボーダー色 */
}
```

## 制約・ルール

- **インラインスタイル禁止**：スタイルは `global.css` またはコンポーネントの `<style>` ブロックに記述する
- **CSS変数を優先**：ハードコードした色値より `var(--text)` 等を使う
- **フォントファミリー変更禁止**：`"Noto Sans JP"` はブランドフォントのため維持する
- **レイアウト幅**：`.shell` クラスで `--shell-width` を使う（独自の `max-width` を追加しない）
- **レスポンシブ**：モバイルブレークポイントは既存の `@media (max-width: 700px)` に合わせる

## 手順

1. **現状把握**：`global.css` と対象コンポーネントを読む
2. **仕様確認**：[デザイン仕様](./references/design-spec.md) を参照して方針を確認する
3. **修正実施**：制約ルールを守りながら編集する
4. **影響確認**：変更したクラスが複数ページで使われていないか `grep_search` で確認する
5. **ビルド確認**：`npm run build` でビルドエラーがないことを確認する（任意）

## よくある改善パターン

- セクション間の余白調整（`padding` / `gap`）
- カードコンポーネントへの `border-radius` / `box-shadow` 追加
- リンク・ボタンのホバーアニメーション追加（`transition`）
- フォントサイズの `clamp()` による可変対応
- カラーコントラスト改善（アクセシビリティ）
