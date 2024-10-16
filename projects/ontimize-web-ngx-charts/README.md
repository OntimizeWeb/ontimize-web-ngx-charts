# Ontimize Web Charts

An implementation of @swimlane/ngx-charts for Ontimize Web.


* [Github repository](#github)
* [Examples](#examples)
* [Installation](#installation)
* [Usage](#usage)

## Github
Ontimize Web Charts module is stored in [github](https://github.com/OntimizeWeb/ontimize-web-ngx-charts){:target="_blank"} where you can also see/add todos, bugs or feature requests in the [issues](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues){:target="_blank"} section.

## Examples

Check out examples demo:
<div>
  <a href="https://ontimizeweb.github.io/ontimize-web-ngx-charts" target="_blank" class="btn btn--success">
    <i class="fa fa-play"></i>
    live demo
  </a>
</div>


## Installation

```bash
  npm install ontimize-web-ngx-charts --save
```

## Usage

Finally, you can use ontimize-web-ngx-charts in your Ontimize Web project.

### Configure angular-cli.json dependencies

You must add the module styles definition in your '*.angular.json*' file styles array:

```bash
...
"styles": [
  ...
  "../node_modules/ontimize-web-ngx-charts/styles.scss",
  ....
],
...
```

### Import in an application module

Include the library chart module into your app in the module where you want to use it.

```bash
...
import { OChartModule } from 'ontimize-web-ngx-charts';
...

@NgModule({
  imports: [
    OChartModule,
    /* other imports */
  ],
  declarations: ...
  providers: ...
})
export class ExampleModule { }
```
