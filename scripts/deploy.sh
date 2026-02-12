#!/bin/sh

cd /var/www/htdocs/qr
git pull origin main
npm ci
npm run build
doas rcctl stop qrapp
doas rcctl start qrapp
