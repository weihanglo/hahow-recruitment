#!/bin/bash

if [[ $(git status -s) ]]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

echo "Deleting old distribution"
rm -rf dist
mkdir dist
git worktree prune
rm -rf .git/worktrees/dist/

echo "Checking out gh-pages branch into dist"
git worktree add -B gh-pages dist origin/gh-pages

echo "Removing existing files"
rm -rf dist/*

echo "Build application"
yarn build

echo "Updating gh-pages branch"
cd dist && git add --all && \
    git commit -m "Distrbuting via dist.sh at $(date)" && \
    git push
