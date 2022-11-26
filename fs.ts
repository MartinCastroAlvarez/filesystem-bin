#!/bin/bash
# -------------------------------------------------------------
# Purpose:
# Lists all TypeScript files in directory, including the full path.
#
# Usage:
# >>> fs.ts /tmp/a/
# -------------------------------------------------------------
fs.files $@ | egrep ".ts"
if [ "$?" != "0" ]
then
    echo "ERROR: Failed to execute: $@"
    exit 100
fi
