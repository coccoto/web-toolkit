FROM node:24-bookworm

# OS をセットアップ
RUN apt update && apt full-upgrade -y && apt autoremove -y && apt clean

WORKDIR /app

# 依存関係をインストール
COPY ./package*.json ./
RUN npm ci

# プログラムをコンテナにコピー
COPY ./ ./

# 環境変数を設定
ENV NEXT_PUBLIC_ENVIRONMENT="production"
ENV NEXT_PUBLIC_PORT="18010"
ENV NEXT_PUBLIC_BASE_URL="http://localhost:18010"
ENV DATABASE_URL="mysql://user:password@localhost:3306/database"

# アプリケーションをビルド
RUN npm run release

# GitHub リポジトリ連携
LABEL org.opencontainers.image.source=https://github.com/coccoto/web-toolkit

# アプリケーションを実行
CMD ["npm", "run", "start"]
