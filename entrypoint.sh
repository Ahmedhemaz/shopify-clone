#!/bin/bash
if [ $NODE_ENV == "development" ]; then
    echo "development mode on";
    npm run build
    typeorm migration:run
fi
npm start
