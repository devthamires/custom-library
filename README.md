### Getting started

To run this library follow the steps:
1. `npm install verdaccio`
2. After install just run `verdaccio`

It will inicializate on http://localhost:4873/

On your angular project, run: `npm install ui-library` and then `ng add ui-library`
and the library and its dependencies will be installed.

## Custom Style

This library supports a simple customizable theme, you just need to configure some css variables like your own colors and fonts. Here is an example below:

```
:root {
  --base: #d2e5f5;
  --base-dark: #4f616e;
  --base-light: #ffffff;
  --on-base: #0b1d29;

  --color-primary: #001e2e;
  --color-primary-light: #c7e7ff;
  --color-primary-dark: #00658e;
  --color-on-primary: $color-white;

  --color-secondary: #1e1635;
  --color-secondary-light: #e8ddff;
  --color-secondary-dark: #63597c;
  --color-on-secondary: $color-white;

  --light: #fcfcff;
  --dark: #343a40;
  --info: #767676;
  --warning: #deab21;
  --danger: #ba1a1a;
  --success: #1aa582;

  --text_default: #191c1e;
  --text_light: #41484d;
  --font-primary-regular: "Roboto-Regular";
  --font-primary-bold: "Roboto-Bold";
  --font-secondary-title: "FSJoey-Heavy";
  --font-secondary-subtitle: "OfficinaSerifStd-Book";
}

```

