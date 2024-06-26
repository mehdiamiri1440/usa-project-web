FROM php:7.2-apache-stretch

#RUN apt-get update

# 1. development packages
RUN apt-get update && apt-get install -qq -y \
    git \
    zip \
    curl \
    sudo \
    unzip \
    libicu-dev \
    libbz2-dev \
    libpng-dev \
    libjpeg-dev \
    libmcrypt-dev \
    libreadline-dev \
    libfreetype6-dev \
    libxml2-dev \
    g++ \
    mysql-client \
    jpegoptim

# 2. apache configs + document root
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN a2enmod ssl
#COPY ./main-configs/000-default-ssl.conf /etc/apache2/sites-enabled
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# 3. mod_rewrite for URL rewrite and mod_headers for .htaccess extra headers like Access-Control-Allow-Origin-
RUN a2enmod rewrite headers

# 4. start with base php config, then add extensions
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
#COPY /etc/php.ini /usr/local/etc/php/php.ini

RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/  --with-jpeg-dir=/usr/include/

RUN docker-php-ext-install \
    bz2 \
    intl \
    iconv \
    bcmath \
    opcache \
    calendar \
    mbstring \
    pdo_mysql \
    zip \
    gd \
    soap

# 5. composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

COPY ./start.sh  /usr/local/bin/start

RUN  chmod u+x /usr/local/bin/start

RUN mkdir -p /var/www/html/storage/framework/{sessions,views,cache} \
          /var/www/html/storage/logs

RUN chown -R www-data:www-data /var/www/html/storage

RUN chown -R www-data:www-data storage
# seting containers timezone to Tehran
ENV TZ=Asia/Tehran
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN cp /usr/bin/mysqldump /usr/local/bin/

CMD ["/usr/local/bin/start"]
