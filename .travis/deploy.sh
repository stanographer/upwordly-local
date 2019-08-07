#!/usr/bin/env bash

echo "Packing up build..."

# Debug mode so we can see what's happening.
set -x

# Use extended glob.
shopt -s extglob

# Make a folder called latest for latest build.
mkdir latest

# Move all contents of Travis working dir into latest.
# Glob expression matches everything other than "latest
mv !(latest) latest

echo "Packaging up build files."

# Compress contents into tarball.
tar -czf package.tgz latest

echo "Sending package to remote host..."

# scp into remote host and place tarball into builds in home.
scp -o stricthostkeychecking=no package.tgz "$REMOTE_USER@$REMOTE_HOST:~/builds" || exit 1

# Open a new ssh connection to the remote host, explicitly set tty with -t, run extract script.
ssh -t -t -o stricthostkeychecking=no "$REMOTE_USER@$REMOTE_HOST" 'bash -s' < .travis/untar.sh
