#!/bin/bash
if [ $NODE_ENV == "development" ]; then
    echo "development mode on";
    typeorm migration:run
fi
npm start
