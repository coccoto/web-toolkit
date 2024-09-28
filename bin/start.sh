#!/bin/bash
set -eu

function runServer() {
    cd "$1"
    npm run start || exit 1
}

# 本スクリプトファイルのディレクトリをセットする
SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)

# root ディレクトリをセットする
ROOT_DIR="$SCRIPT_DIR/.."

# root の処理を開始する
runServer "$ROOT_DIR"

echo '[INFO] root is complete.'
