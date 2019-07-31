#!/usr/bin/env sh
if [ "$TRAVIS_BRANCH" == "master" ]; then
  set -x
  tar -czf package.tgz build && \
  sshpass -p $PASSKEY scp -o StrictHostKeyChecking=no scp package.tgz $REMOTE_USER@$REMOTE_HOST:$REMOTE_APP_DIR && \
  sshpass -p $PASSKEY scp -o StrictHostKeyChecking=no ssh $REMOTE_USER@$REMOTE_HOST 'bash -s' < .travis/untar.sh
  exit 0
fi
