# La imagen base que va a usar para generar la nueva
FROM php:8.2-apache

# Añade el módulo PDO a la imagen para acceder poder a bd.
RUN docker-php-ext-install pdo pdo_mysql

RUN a2enmod rewrite    
#Configurar Apache para permitir .htaccess
RUN echo '<Directory /var/www/html/>\n\
    Options Indexes FollowSymLinks\n\
    AllowOverride All\n\
    Require all granted\n\
</Directory>' > /etc/apache2/conf-available/override.conf \
    && a2enconf override

EXPOSE 80