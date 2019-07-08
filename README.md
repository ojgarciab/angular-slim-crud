# AngularSlimCrud

[![Build Status](https://travis-ci.org/ojgarciab/angular-slim-crud.svg?branch=master)](https://travis-ci.org/ojgarciab/angular-slim-crud)
[![StyleCI](https://github.styleci.io/repos/189402927/shield?branch=master)](https://github.styleci.io/repos/189402927)

Este proyecto ha sido generado inicialmente con la versión 7.3.9 de [Angular CLI](https://github.com/angular/angular-cli).

## Preparando el entorno de desarrollo

Asumimos que el directorio de trabajo estará bajo /var/www/html/&lt;cloned project&gt;/ para que las siguientes instrucciones permitan al servidor web Apache servidor nuestro proyecto bajo la URL http://&lt;cloned project&gt;.localhost/

    sudo cp apache2/vlocalhost.conf /etc/apache2/sites-available/
    sudo a2enmod vhost_alias
    sudo a2enmod rewrite
    sudo a2ensite vlocalhost
    sudo systemctl restart apache2

Ahora debemos descargarnos los archivos de OpenID que no podemos descargarnos de Google por problemas de CORS:

    curl "https://accounts.google.com/.well-known/openid-configuration" > src/openid-configuration.json

## Servidor de desarrollo

Ejecute la siguiente instrucción para construir el proyecto cada vez que se modifique un archivo en `public/web`. Navegue a `http://&lt;cloned project&gt;.localhost/`, será redirigido a `http://&lt;cloned project&gt;.localhost/web/`. La aplicación no se recargará automáticamente tras cada cambio como suele ocurrir con `ng serve`, si no que necesitará refrescar manualmente la página.

```
ng build --watch --outputHashing=all --baseHref=/web/ --outputPath=public/web
```

Tras la generación de archivos puede ignorar en GIT los cambios realizados en `public/web` usando la siguiente instrucción:

```
git update-index --assume-unchanged public/web/.gitkeep public/web/index.html
```

## Build

Ejecute la siguiente instrucción para construir el proyecto en el directorio `public/web`. Use el parámetro `--prod` para la construcción del entorno de producción.

```
ng build --baseHref=/web/ --outputPath=public/web
```

## Ejecutando las pruebas unitarias

Ejecute `ng test` para ejecutar las pruebas unitarias usando [Karma](https://karma-runner.github.io).

## Ejecutando las pruebas extremo-a-extremo

Ejecute `ng e2e` para ejecutar las pruebas extremo-a-extremo usando [Protractor](http://www.protractortest.org/).

