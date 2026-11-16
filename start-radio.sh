#!/bin/bash
cd "$(dirname "$0")"
echo "Menjalankan MyRadio App di port 8080..."
python3 -m http.server 8080
