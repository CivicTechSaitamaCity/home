# デザイン仕様

このサイト（otkzh/home）のデザイン方針・トークン・コンポーネント定義をまとめます。

---

## カラー

| 変数 / 値 | 役割 |
|---|---|
| `var(--text)` → `#000` | 本文・見出し |
| `var(--muted)` → `#444` | 補足テキスト・フッター |
| `var(--border)` → `#d9d9d9` | 区切り線・ボーダー |
| `rgb(83, 139, 0)` | レポートバッジ背景色（緑） |
| `#fff` | 背景・ナビメニュー背景 |
| `#eee` | スライダー背景 |
| `#f2f2f2` | スライド空状態背景 |

## タイポグラフィ

| 項目 | 値 |
|---|---|
| 本文フォント | `"Noto Sans JP", sans-serif` |
| 見出しフォント（h2・ページタイトル） | `cursive` |
| フッターキャプション | `"Shadows Into Light", cursive` |
| 本文サイズ | `15.5px` / 行高 `1.72` |
| h2フォントサイズ | `clamp(2.6rem, 3.6vw, 3rem)` |
| 本文コンテンツサイズ | `clamp(15px, 0.95vw, 21px)` |

## レイアウト

| 項目 | 値 |
|---|---|
| コンテンツ最大幅 | `var(--shell-width)` → `1000px` |
| セクション余白 | `padding: 40px 16px 0` |
| ページ最低高さ | `main { min-height: 80vh }` |

## ブレークポイント

| ブレークポイント | 変化内容 |
|---|---|
| `max-width: 800px` | スライド2列、プロジェクト・イベントグリッド2列 |
| `max-width: 640px` | ハンバーガーメニュー表示、見出し全幅、余白縮小 |

## コンポーネント

### ヘッダー (`.site-header`)
- ロゴ幅 `142px`
- ナビメニュー `font-size: 13px`、`letter-spacing: 0.03em`
- モバイルでドロップダウン（`border-radius: 12px`・`box-shadow`付き）

### ヒーロースライダー (`.hero-slider`)
- デスクトップ：3列、高さ `min(23vw, 300px)`
- 800px以下：2列
- `object-fit: contain` でトリミングしない

### ニュース (`.news-list`)
- `.news-date`：`font-weight: 700`、`font-size: 15px`
- `.news-report`バッジ：緑背景・白文字・`border-radius: 4px`

### イベントグリッド (`.event-grid`)
- デスクトップ：4列（`width: 25%`）
- 800px以下：2列
- hover時 `opacity: 0.5`

### レポート一覧 (`.report-item`)
- 水平Flexbox、`gap: 16px`
- 日付エリア `flex: 0 0 120px`
- 各アイテム下部にボーダー `var(--border)`

## 改善候補（未実装）

- ダークモード対応（`color-scheme` は `light` 固定のため要検討）
- セクション見出しのアンダーラインデコレーション
- ニュースリストのホバーハイライト
- イベントグリッドへの `border-radius` 追加
- フォーカスリングのスタイル統一（アクセシビリティ）
- `prefers-reduced-motion` 対応
