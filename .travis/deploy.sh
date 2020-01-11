#!/usr/bin/sh

echo "Packaging up build files."

# Compress contents into tarball.
tar -czf package.tgz . --warning=no-file-changed

echo "Sending package to remote host..."

# scp into remote host and place tarball into builds in home.
scp -o stricthostkeychecking=no package.tgz "$REMOTE_USER@$REMOTE_HOST:/home/deploy/" || exit 1

# Open a new ssh connection to the remote host, explicitly set tty with -t, run extract script.
#ssh -t -o stricthostkeychecking=no "$REMOTE_USER@$REMOTE_HOST" 'sh -s' < .travis/untar.sh

ssh -t -o stricthostkeychecking=no "$REMOTE_USER@$REMOTE_HOST" << "ENDSSH"

export NODE_ENV=production

cd /home/deploy || exit 1

# Extract the package we just scp'd over.
tar -zxf package.tgz -C latest --unlink-first

rm package.tgz

cd latest || exit 1

# npm install dependencies.
npm install

echo "Stopping and deleting old processes."

# Stop the running old deployment.
pm2 stop "all"

# Delete old deployments.
pm2 delete "all"

# Kill pm2
pm2 kill

echo "Starting up pm2."

# Start a new process in cluster mode using all available processors.
pm2 start -i max npm --name "upwordly-frontend:latest" -- start

ENDSSH
