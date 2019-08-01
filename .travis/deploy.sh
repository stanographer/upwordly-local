#!/usr/bin/env bash
set -x
shopt -s extglob
mkdir latest
mv !(latest) latest
tar -czf package.tgz latest
scp -o stricthostkeychecking=no package.tgz "$REMOTE_USER@$REMOTE_HOST:~/builds" || exit 1
ssh -t -o stricthostkeychecking=no "$REMOTE_USER@$REMOTE_HOST" 'bash -s -t' < .travis/untar.sh
