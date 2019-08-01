#!/bin/bash
set -x
export NODE_ENV=production
cd ~/builds || exit 1
tar -zxf package.tgz -C .
mv latest/package.json .
npm install
npm run start