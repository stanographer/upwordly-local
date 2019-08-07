#!/usr/bin/env bash

echo "Now extracting and deploying..."

# Debug mode so we can see what's happening.
set -x

# Move into builds folder
cd ~/builds || exit 1

# Extract the package we just scp'd over.
tar -xzf package.tgz

# Remove the tarball after extraction.
rm package.tgz

# Folder with build files will be called "latest" so cd into that.
cd latest || exit 1

# npm install dependencies.
npm install

# Stop the running old deployment.
pm2 stop all

# Remove all old pm2 processes.
pm2 delete all

# Start a new process in cluster mode using all available processors.
pm2 start -i "max" npm --name "upwordly-frontend:latest" -- start
