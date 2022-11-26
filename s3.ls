#!/bin/bash
# -------------------------------------------------------------
# Purpose:
# Listing files in AWS S3.
#
# Usage:
# >>> s3.ls s3//<bucket>/<key>
# -------------------------------------------------------------
if [ -z "${PROFILE}" ]
then
    PROFILE="martin"
fi
BUCKET="$1"
PREFIX=""
if [[ ! "${BUCKET}" =~ ^s3:// ]]
then
    BUCKET="s3://${BUCKET}"
fi
aws s3 --profile "${PROFILE}" ls "${BUCKET}"
if [ "$?" != "0" ]
then
    echo "ERROR: Failed to execute: $@"
    exit 100
fi
