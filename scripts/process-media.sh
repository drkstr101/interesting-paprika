#!/usr/bin/env bash

node scripts/get-all-uploads.mjs | jq '.allUploads | map({ (.filename): . }) | add' > src/utils/media.json
