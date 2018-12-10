#!/usr/bin/env sh

set -e
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:ssm1le/cuba-site-vue.git master:gh-pages
cd -