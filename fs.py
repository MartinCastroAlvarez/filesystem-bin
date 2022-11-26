#!/bin/bash
# -------------------------------------------------------------
# Purpose:
# Lists all Python files in directory, including the full path.
#
# Usage:
# >>> fs.py /tmp/a/
# -------------------------------------------------------------
fs.files $@ | egrep ".py$"
if [ "$?" != "0" ]
then
    echo "ERROR: Failed to execute: $@"
    exit 100
fi
