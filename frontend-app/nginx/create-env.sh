#!/bin/sh

IP_ADDR=$(cat /etc/hosts | egrep -o '[0-9]{3}\.[0-9]{2,3}\.[0-9]{1,3}\.[0-9]{1,3}')
echo "IP_ADDR=$IP_ADDR" > $1/.env