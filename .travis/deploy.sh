#!/bin/bash
set -x
shopt -s extglob
mkdir latest
mv !(latest) latest
tar -czf package.tgz latest
scp -o stricthostkeychecking=no package.tgz "$REMOTE_USER@$REMOTE_HOST:~/builds" || exit 1
ssh -t -o stricthostkeychecking=no "$REMOTE_USER@$REMOTE_HOST" "cd ~/builds ; bash"
tar -xzf package.tgz .
#if [ "$TRAVIS_BRANCH" == "master" ]; then
#  set -x
#  tar -czf package.tgz build && \
#  sshpass -p $PASSKEY scp -o StrictHostKeyChecking=no scp package.tgz $REMOTE_USER@$REMOTE_HOST:$REMOTE_APP_DIR && \
#  sshpass -p $PASSKEY scp -o StrictHostKeyChecking=no ssh $REMOTE_USER@$REMOTE_HOST 'bash -s' < .travis/untar.sh
#  exit 0
#f
#
#
#set x
#cd ~/upwordly-build || exit 1
#
## Extract the package
#tar zxvf package.tgz -C .
#rm package.tgz
#mv build/package.json .
#npm run start
#exit 0
#
