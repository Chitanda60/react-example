#!/usr/bin/env bash

cd ./src/render
webpack
cd ../../
babel-node app.js