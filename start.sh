#!/usr/bin/env bash

set -e

source ./config.defaults.sh
if [ -f "./config.sh" ]; then
  source ./config.sh
else
  echo "You have no config.sh. Copy config.defaults.sh to config.sh, change the passwords and try again." && exit 1;
fi

docker build -t $PROCESS_NAME:local .
if [ ! -f state.json ]; then
  touch state.json
fi

[ "$(docker ps | grep $PROCESS_NAME)" ] && docker stop $PROCESS_NAME
[ "$(docker ps -a | grep $PROCESS_NAME)" ] && docker rm $PROCESS_NAME

docker run -d \
   -e URL=$URL \
   -e REMOTE_DATABASE_URL=$REMOTE_DATABASE_URL \
   --link couchdb:couchdb \
   -v $(pwd)/state.json:/state.json \
   --name $PROCESS_NAME \
   $PROCESS_NAME:local

docker logs -f $PROCESS_NAME
