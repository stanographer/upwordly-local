#!/usr/bin/env bash
set -x
export NODE_ENV=production
cd ~/builds || exit 1
tar -xzf package.tgz
rm package.tgz
cd latest || exit 1
npm install
#sudo touch .env
#echo sudo tee ../../env > .env
#npm run build
npm run start