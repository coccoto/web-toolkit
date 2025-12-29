FROM node:24-bookworm

WORKDIR /app

# アプリケーションファイルをコピー
COPY . .

# 依存関係を解決
RUN npm install

# アプリケーションをビルド
RUN npm run release

# アプリケーションの実行
CMD ["npm", "run", "start"]