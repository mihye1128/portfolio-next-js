# Portfolio Website

個人ポートフォリオサイトのソースコードです。

## 技術スタック

### フレームワーク・ライブラリ

- **Next.js 16** - React フレームワーク（App Router使用）
- **React 19** - UIライブラリ
- **TypeScript 5** - 型安全な開発環境

### スタイリング

- **Tailwind CSS 4** - ユーティリティファーストCSSフレームワーク
- **Radix UI** - アクセシブルなUIコンポーネント
- **next-themes** - ダークモード対応
- **lucide-react** - アイコンライブラリ
- **class-variance-authority** - コンポーネントのバリアント管理

### 開発環境・品質管理

- **ESLint** - コード品質チェック
- **Prettier** - コードフォーマッター
- **Husky** - Git hooksによる自動チェック
- **lint-staged** - ステージングファイルの自動lint/format
- **Storybook** - UIコンポーネントカタログ（導入予定）
- **Vitest** - テストフレームワーク（導入予定）

## 主な機能

- **レスポンシブデザイン**: モバイル・タブレット・デスクトップに対応
- **ダークモード**: ライト/ダークテーマの切り替え
- **コンポーネント設計**: 再利用可能なUIコンポーネント
- **型安全性**: TypeScriptによる堅牢な実装
- **アクセシビリティ**: Radix UIによるWCAG準拠

## セットアップ

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認できます。

## 開発コマンド

```bash
# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバーの起動
npm start

# ESLintによるコードチェック
npm run lint

# ESLintによる自動修正
npm run lint:fix

# Prettierによるフォーマット
npm run format

# Storybookの起動 （導入予定）
npm run storybook

# Storybookのビルド （導入予定）
npm run build-storybook
```

## プロジェクト構造

```
portfolio-next-js/
├── app/
│   ├── _components/      # ページコンポーネント
│   ├── layout.tsx        # ルートレイアウト
│   └── page.tsx          # トップページ
├── components/
│   └── ui/               # 共通UIコンポーネント
├── .storybook/           # Storybook設定 （導入予定）
└── stories/              # Storybookストーリー （導入予定）
```

## コード品質管理

このプロジェクトでは以下のツールでコード品質を管理しています:

- **ESLint**: Next.js、TypeScript、Storybookの推奨ルールを適用
- **Prettier**: 一貫したコードフォーマット
- **Husky + lint-staged**: コミット前の自動チェック

コミット時に自動的にlintとformatが実行されます。

## Storybook（導入予定）

UIコンポーネントはStorybookで管理予定

```bash
npm run storybook
```

[http://localhost:6006](http://localhost:6006) でコンポーネントカタログを確認できます。
