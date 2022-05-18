#!/usr/bin/env bash

docker-compose -f docker-compose.yml -f docker-compose.override.yml exec api sh -c './manage.py refreshfeeds'