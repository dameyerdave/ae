#!/usr/bin/env bash

DIR='/usr/share/nginx/html'
docker exec ae_ui_1 sh -c "${DIR}/ss/update.sh"