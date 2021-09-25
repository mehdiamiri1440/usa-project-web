#!/usr/bin/env bash

set -e

role=${CONTAINER_ROLE:app}
env=${APP_ENV:-production}

if [ "$role" = "app" ]; then

    exec apache2-foreground
    php /var/www/html/artisan config:cache
    php /var/www/html/artisan view:clear
    php /var/www/html/artisan migrate 
    php /var/www/html/artisan storage:link
    # php /var/www/html/artisan fetch:media


elif [ "$role" = "queue" ]; then

    php /var/www/html/artisan config:cache
    php /var/www/html/artisan migrate 
    echo "Running the queue..."
    php /var/www/html/artisan queue:work --verbose --tries=3 --timeout=90 --queue=sms,fcm,default

elif [ "$role" = "mainqueue" ]; then

    php /var/www/html/artisan config:cache
    php /var/www/html/artisan migrate 
    echo "Running the queue..."
    php /var/www/html/artisan queue:work --verbose --tries=3 --timeout=90 --queue=main

elif [ "$role" = "scheduler" ]; then

    php /var/www/html/artisan config:cache
    php /var/www/html/artisan migrate 
    while [ true ]
    do
      php /var/www/html/artisan schedule:run --verbose --no-interaction &
      sleep 60
    done

else
    echo "Could not match the container role \"$role\""
    exit 1
fi
