#!/bin/bash

docker stack deploy -c docker-compose.yml ecommerce
echo "Stack deployed. Use 'docker service ls' to check services."
