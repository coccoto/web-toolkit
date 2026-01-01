FROM node:24-bookworm

# OS をセットアップ
RUN apt update && apt full-upgrade -y && apt autoremove -y && apt clean

WORKDIR /app

# 依存関係をインストール
COPY ./package*.json ./
RUN npm ci

# プログラムをコンテナにコピー
COPY ./ ./

# アプリケーションをビルド
RUN npm run release

# GitHub リポジトリ連携
LABEL org.opencontainers.image.source=https://github.com/coccoto/web-toolkit

# アプリケーションを実行
CMD ["npm", "run", "start"]
