#!/usr/bin/env bash
set -x
export NODE_ENV=production
cd ~/builds || exit 1
tar -xzf package.tgz
rm package.tgz
mv latest/package.json .
npm install
npm run start