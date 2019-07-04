# AngularSlimCrud

[![Build Status](https://travis-ci.org/ojgarciab/angular-slim-crud.svg?branch=master)](https://travis-ci.org/ojgarciab/angular-slim-crud)
[![StyleCI](https://github.styleci.io/repos/189402927/shield?branch=master)](https://github.styleci.io/repos/189402927)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Preparing the development environment

We assume that working directory is under /var/www/html/&lt;cloned project&gt;/ so we can execute these instructions to allow Apache serve our project under http://&lt;cloned project&gt;.localhost/

    sudo cp apache2/vlocalhost.conf /etc/apache2/sites-available/
    sudo a2enmod vhost_alias
    sudo a2enmod rewrite
    sudo a2ensite vlocalhost
    sudo systemctl restart apache2

## Development server

Run the following command for a dev server. Navigate to `http://&lt;cloned project&gt;.localhost/`. The app will automatically reload if you change any of the source files.

```
ng build --watch --outputHashing=all --baseHref=/web/ --outputPath=public/web
```

## Build

Run the following command to build the project. The build artifacts will be stored in the `public/web` directory. Use the `--prod` flag for a production build.

```
ng build --baseHref=/web/ --outputPath=public/web
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
