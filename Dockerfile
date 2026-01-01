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
ARG NEXT_PUBLIC_ENVIRONMENT
ARG NEXT_PUBLIC_PORT
ARG NEXT_PUBLIC_BASE_URL
ARG DATABASE_URL
ENV NEXT_PUBLIC_ENVIRONMENT=${NEXT_PUBLIC_ENVIRONMENT}
ENV NEXT_PUBLIC_PORT=${NEXT_PUBLIC_PORT}
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
ENV DATABASE_URL=${DATABASE_URL}

# アプリケーションをビルド
RUN npm run release

# GitHub リポジトリ連携
LABEL org.opencontainers.image.source=https://github.com/coccoto/web-toolkit

# アプリケーションを実行
CMD ["npm", "run", "start"]
