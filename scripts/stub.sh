#!/bin/bash

echo "Starting stub server on port 4000..."
stubby --stubs 4000 --data api/endpoints.yml
