# Setup

- install Node LTS `16.20.2` (or LTS v18)
- ensure Angular core (`@angular/core`) is installed in project
  - run `npm i` to ensure it is installed
- remove CLI v13 and install v15
  - remove v13 `npm remove -g @angular/cli@13`
  - install v15 `npm install -g @angular/cli@15`
  - *- may require su -*
- commit to repo (upgrade should be done on non-dirty repo)
- upgrade from v13: [Angular upgrade guide](https://update.angular.io/?v=13.0-15.0)
  1. up to v14: `ng update @angular/core@14 @angular/cli@14`
     - commit to repo
  2. up to v15: `ng update @angular/core@15 @angular/cli@15`

# Versions

[Version compatibility](https://angular.io/guide/versions)

Angular Core/CLI: `15.1.x`
Node: `^14.20.0` || `^16.13.0` || `^18.10.0`
TypeScript: `~4.8.2`
RxJS: `^6.5.3` || `^7.4.0`

> $ `ng --version`
```sh
pending

```

===

# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
