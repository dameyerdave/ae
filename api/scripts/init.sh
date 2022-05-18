#!/usr/bin/env bash

docker-compose -f docker-compose.yml -f docker-compose.override.yml exec api sh -c './manage.py addfeed -n 20min -u "https://partner-feeds.beta.20min.ch/rss/20minuten"'
docker-compose -f docker-compose.yml -f docker-compose.override.yml exec api sh -c './manage.py addfeed -n blick -u "https://www.blick.ch/news/rss.xml"'
