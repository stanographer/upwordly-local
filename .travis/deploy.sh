#!/usr/bin/sh

echo "Packing up build..."

# Debug mode so we can see what's happening.
set -x

## Use extended glob.
#shopt -s extglob
#
# Make a folder called latest for latest build.
mkdir latest
#
## Move all contents of Travis working dir into latest.
#mv !(latest) latest

# Move all files into latest folder.
tar -czf package.tgz latest

echo "Packaging up build files."

# Compress contents into tarball.
tar -czf package.tgz latest

echo "Sending package to remote host..."

# scp into remote host and place tarball into builds in home.
scp -o stricthostkeychecking=no package.tgz "$REMOTE_USER@$REMOTE_HOST:~/builds" || exit 1

# Open a new ssh connection to the remote host, explicitly set tty with -t, run extract script.
#ssh -t -o stricthostkeychecking=no "$REMOTE_USER@$REMOTE_HOST" 'sh -s' < .travis/untar.sh

ssh -t -o stricthostkeychecking=no "$REMOTE_USER@$REMOTE_HOST" << "ENDSSH"

ENDSSH

export NODE_ENV=production

echo "Extracting package."

# Extract the package we just scp'd over.
tar -zxvf package.tgz -C builds

rm package.tgz

cd ~/builds || exit 1

# npm install dependencies.
npm ci

cd latest || 1

echo "Stopping and deleting old processes."

# Stop the running old deployment.
pm2 stop "all"

#Delete old deployments.
pm2 delete "all"

echo "Starting up pm2."

# Start a new process in cluster mode using all available processors.
pm2 start -i "max" npm --name "upwordly-frontend:latest" -- start
