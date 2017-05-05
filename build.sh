#!/usr/bin/env bash

NODE_ENV=$envtype npm run build:webpack

NODE_ENV=$envtype npm run build:gulp $envtype

# build.sh
# ...
# 保留打包信息 只用dev pre daily
if [[ $envtype = 'dev' ]] || [[ $envtype = 'pre' ]] || [[ $envtype = 'daily' ]]; then
    echo -e "<pre>build at: "$(date)"\nbranch: "$(git rev-parse --abbrev-ref HEAD)"\ncommit: "$(git log --pretty=oneline -1)"</pre>" > ./release/min/build_info.html
fi
