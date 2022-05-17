#!/usr/bin/env bash

DIR='/usr/share/nginx/html/ss'

cd ${DIR}
PJ='phantomjs --ignore-ssl-errors=yes'
${PJ} meteothusis.js
${PJ} meteodavos.js
${PJ} meteostmoritz.js
${PJ} lawinengefahr.js
${PJ} vrkgr.js
${PJ} vrkrhb.js
${PJ} vrkrhb2.js

wget -O zustandsmeldungen.html http://www.strassen.gr.ch/sites/strassenzustand/zustandsmeldungen.html
wget -O rhbbetriebslage.html https://www.rhb.ch/de/betriebslage
wget -O hugge.html https://www.bag.admin.ch/bag/de/home/krankheiten/ausbrueche-epidemien-pandemien/aktuelle-ausbrueche-epidemien/saisonale-grippe---lagebericht-schweiz.html
