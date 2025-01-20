#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

pushd "${SCRIPT_DIR}/frontend"
npm run build
popd


pushd "${SCRIPT_DIR}/backend"
npm run start
