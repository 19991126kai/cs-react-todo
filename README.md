## 概要
本リポジトリはC#・Reactの技術課題として作成した簡易TODOアプリである。   

【アプリURL】   
https://cs-react-todo-dramc7gzhjcmh3dq.japanwest-01.azurewebsites.net/

## 技術スタック

### バックエンド
![C#](https://img.shields.io/badge/C%23-512BD4?logo=csharp&logoColor=white)
![ASP.NET Core](https://img.shields.io/badge/ASP.NET%20Core-512BD4?logo=dotnet&logoColor=white)

### フロントエンド
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)

### インフラ
![Azure App Service](https://img.shields.io/badge/Azure%20App%20Service-0078D4?logo=microsoftazure&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)

### ツール・その他
![VSCode](https://img.shields.io/badge/VSCode-007ACC?logo=visualstudiocode&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white)
![draw.io](https://img.shields.io/badge/draw.io-F08705?logo=diagramsdotnet&logoColor=white)

## インフラ構成図
<img width="1169" height="827" alt="TODOアプリ_システム構成図" src="https://github.com/user-attachments/assets/50b6481d-26e6-498e-9b9b-08bdc2c94b48" />

## 画面遷移図
<img width="8624" height="4900" alt="TODOアプリ_画面遷移図" src="https://github.com/user-attachments/assets/62119645-d2af-48e1-8bfe-f51c8802322f" />

## DB設計図
```mermaid
erDiagram
  todos

  todos {
    int id PK
    string title
    boolean isCompleted
    datetime deadline
    datetime createdAt
    datetime updatedAt
  }
```

## 苦労した点・工夫した点
- Reactフォルダ構成
  - Railsなどと違いフォルダ構成がかなり柔軟なため、どのように実装していくか迷った。
  - 今回のアプリは機能が単一であること、規模も小さいことから、分かりやすい`type-based`を採用した。
  ```
  src/
  ├── api/                # APIラッパー
  ├── components/         # UIコンポーネント
  ├── pages/              # ページ
  ├── types/              # 型定義
  ```
- 接続先の環境によるDB設定の分岐
  - 開発環境では`SQLite`、本番では`Azure PostgreSQL`を使用するよう`Program.cs`を環境変数に応じて切り替えた。

## 改善したいポイント
- パフォーマンス改善
  - API実行に時間がかかることがあり、少々ストレスがある。
  - `Azure Front Door`の導入や、プランの見直しで改善される？
- UI/UXの改善
  - 各種操作時（特にTODO作成時）に画面変化が少なく、操作が反映されているか不安になる。
  - ローディングスピナーやトーストなどのユーザフィードバックを追加したい。
