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
     - commit to repo

# Versions

[Version compatibility](https://angular.io/guide/versions)

- Angular Core/CLI: *`15.2.x`*
- Node: *`16.20.2`* (`^14.20.0` || `^16.13.0` || `^18.10.0`)
- TypeScript: *`4.9.5`* (`~4.8.2`)
- RxJS: *`7.5.7`* (`^6.5.3` || `^7.4.0`)

> $ `ng version`
```sh
Angular CLI: 15.2.10
Node: 16.20.2
Package Manager: npm 8.19.4
OS: darwin arm64

Angular: 15.2.10
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1502.10
@angular-devkit/build-angular   15.2.10
@angular-devkit/core            15.2.10
@angular-devkit/schematics      15.2.10
@schematics/angular             15.2.10
rxjs                            7.5.7
typescript                      4.9.5

```

===

