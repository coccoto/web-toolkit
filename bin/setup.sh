#!/bin/bash
set -eu

function npmInstall() {
    cd "$1"
    npm install || exit 1
}

function build() {
    cd "$1"
    npm run release || exit 1
}

# 本スクリプトファイルのディレクトリをセットする
SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)

# root ディレクトリをセットする
ROOT_DIR="$SCRIPT_DIR/.."

# root の処理を開始する
npmInstall "$ROOT_DIR"
build "$ROOT_DIR"

echo 'root complete'
