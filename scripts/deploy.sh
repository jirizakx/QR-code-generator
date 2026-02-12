#!/bin/bash

cd /var/www/htdocs/qr
git pull origin main
npm ci
npm run build
doas rcctl restart qrapp
