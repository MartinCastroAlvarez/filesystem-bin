#!/bin/bash
# -------------------------------------------------------------
# Purpose:
# Lists all Javascript files in directory, including the full path.
#
# Usage:
# >>> fs.js /tmp/a/
# -------------------------------------------------------------
fs.files $@ | egrep ".js"
if [ "$?" != "0" ]
then
    echo "ERROR: Failed to execute: $@"
    exit 100
fi
