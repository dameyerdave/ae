#!/usr/bin/env bash

docker exec ae_api_1 sh -c './manage.py addfeed -n 20min -u "https://partner-feeds.beta.20min.ch/rss/20minuten"'
docker exec ae_api_1 sh -c './manage.py addfeed -n blick -u "https://www.blick.ch/news/rss.xml"'
