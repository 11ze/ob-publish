#!/bin/sh

# 检查有 Git 才执行
if which git > /dev/null; then
    git submodule update --init --recursive
fi

rm -rf content/.obsidian
rm content/README.md
mv content/*.md content/Atlas
find content/ -name "*.md" | xargs -I file  mv -f file content
