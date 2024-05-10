#!/bin/sh

# 检查有 Git 才执行
if which git > /dev/null; then
    git submodule update --init --recursive
fi

rm -rf content/.obsidian
rm -rf content/.trash
rm -rf content/scripts
rm -rf content/Atlas
rm content/README.md
