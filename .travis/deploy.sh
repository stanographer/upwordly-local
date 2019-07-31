#!/usr/bin/env sh
set -x

tar -czf package.tgz .next && \
scp package.tgz $REMOTE_USER@$REMOTE_HOST:$REMOTE_APP_DIR && \
ssh $REMOTE_USER@$REMOTE_HOST 'bash -s' < ./travis/untar.sh