FROM node:24-bookworm

# OS をセットアップする
RUN apt update && apt full-upgrade -y && apt autoremove -y && apt clean

# 作業ディレクトリを設定
WORKDIR /app

# プログラムをコピー
COPY . .

# アプリケーションをビルド
RUN npm ci
RUN npm run prisma:generate
RUN npm run release

# アプリケーションの実行
# CMD ["npm", "run", "dev-server"]
CMD ["npm", "run", "start"]
