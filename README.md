# Ontimize Web Charts
An implementation of nvD3 and d3 charts library for Ontimize Web.

* [Examples](#examples)
* [Installation](#installation)
* [Usage](#usage)

## Examples

Check out examples demo <a href="https://ontimizeweb.github.io/ontimize-web-ng2-charts" target="_blank" title="examples demo">
here</a>

## Installation

First you need to install chart module dependencies (d3 and nvD3 libraries):
```sh
npm install d3@3.5.6 nvd3@1.8.4 ng2-nvd3@1.1.3 --save
````

Do not forget to add typings as well
```sh
typings install d3 nvd3 --ambient -DA
````

After that, install the npm chart module:
```sh
npm install npm-ontimize-web-ng2-charts --save
```

## Usage

Finally, you can use ontimize-web-ng2-charts in your Ontimize Web project.

### Configure third party dependencies and chart module (Angular-cli & SystemeJS)

Configure third party dependencies like this:

**system-config.ts**
```sh
map: {
  'ontimize-web-ng2-charts': 'vendor/ontimize-web-ng2-charts',

  'd3': 'vendor/d3',
  'nvd3': 'vendor/nvd3',
  'ng2-nvd3': 'vendor/ng2-nvd3/build/lib',
}

const cliSystemConfigPackages: any = {
};
// ontimize chart module
cliSystemConfigPackages['ontimize-web-ng2-charts'] = { main: 'o-chart' };
// third party dependencies
cliSystemConfigPackages['d3'] = { main: 'd3.min' };
cliSystemConfigPackages['nvd3'] = { main: 'build/nv.d3.min' };
cliSystemConfigPackages['ng2-nvd3'] = { main: 'ng2-nvd3' };

```

**angular-cli-build.js**
```sh
var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      ....

      'ontimize-web-ng2-charts/*.js',
      'ontimize-web-ng2-charts/src/**/*.js',

      'd3/*min.js',
      'nvd3/build/*min.js',
      'ng2-nvd3/build/lib/*.js',

      'ontimize-web-ng2-charts/**/*.css',
      'nvd3/build/*.+(css|css.map)'
     ]
  });
};
```
**index.html**
Do not forget to include CSS style sheets

```sh
<link rel="stylesheet" type="text/css" href="./vendor/nvd3/build/nv.d3.min.css"/>
```