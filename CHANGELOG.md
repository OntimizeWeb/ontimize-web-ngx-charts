## 15.1.2 (2024-07-11)
### Features
* **o-chart**:
  * Added new inputs `show-x-axis-label` and `show-y-axis-label` to allows the user to hide chart axis labels ([1b3d30cv](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/1b3d30c)) Closes [#247](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/247)

### Bug Fixes
* **o-chart**:
  * Fixed bug that not allow customization when using static data ([3198a57](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/3198a57)) Closes [#246](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/246)

* **Charts on demand**:
  * Fixed bug with translations in load configuration dialog ([e1b82f3](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/e1b82f3)) Closes [#251](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/251)

## 15.1.1 (2024-06-10)
### Features
* **o-chart**:
  * Added new output `onDataLoaded` ([ccfe9f6](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/ccfe9f6)) Closes [#238](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/238)

## 15.1.0 (2024-05-27)
### Features
* **o-chart**:
  * Added new inputs `x-formatting` and `y-formatting` to allows the user to format axis charts ([ba85613](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/ba85613)) Closes [#219](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/219)
  * Added new inputs `show-legend`, `legend-position` and `legend-title` to customize the chart legend ([e44bc74](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/e44bc74)) Closes [#221](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/221)
  * Added new outputs `onSelect`, `onActivate` and `onDeactivate` ([5703f30](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/5703f30)) Closes [#224](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/224)

## 15.0.1 (2024-05-16)
### Bug Fixes
 * Fixed bug that prevented the grid from being hidden ([e2d5ba4](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/e2d5ba4)) Closes [#214](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/214)
 * Fixed bug that prevented modifying the height and width of the charts ([e7f25e0](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/e7f25e0)) Closes [#199](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/199)

## 15.0.0 (2024-02-21)
### DEPENDENCY UPDATES
* **Updated**: ontimize-web-ngx@15.0.0

## 15.0.0-beta.1 (2023-11-15)
### Features
* **Charts on demand:** Added table column date format to charts ([847366e](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/847366e)) Closes [#156](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/156)

### Bug Fixes
* **Charts on demand:**
  * Fixed bug that makes the menu button disappear ([2c06e9d](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/2c06e9d)) Closes [#139](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/139)
  * Fixed bug that causes the image to not be seen before loading the graph ([b50ec36](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/b50ec36)) Closes [#141](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/141)
  * Fixed bug with type currency ([8e14f6c](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/8e14f6c)) Closes [#147](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/147)
  * Fixed bug that caused the area graph to not be created ([a9bb376](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/a9bb376)) Closes [#146](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/146)
  * Fixed error that prevented building the graph the first time ([a2b9ef2](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/a2b9ef2)) Closes [#145](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/145)
  * Fixed bug that causes the graph not to adapt to the available size ([a35b8af](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/a35b8af)) Closes [#153](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/153)
  * Fixed error in adapting the data for the area graph ([c26fe8f](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/c26fe8f)) Closes [#158](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/158)

## 15.0.0-beta.0 (2023-09-29)
### Features
* Migration to Angular 15.
* Migration to Angular Material 15.
* The nvd3 library has been replaced by ngx-charts.
* **o-chart**: New `color`, `show-grid-lines` and `show-data-label` inputs.

## 8.2.0 (2023-03-01)
### Features
* **Charts on demand:** Added new option to select the color palette of a graph ([a0ebe03](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/a0ebe03)) Closes [#98](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/98)
### Bug Fixes
* **Charts on demand:** Fixed issue that causes an error when exporting and displaying the skeleton in dark mode ([a0c4953](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/a0c4953)) Closes [#105](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/105)

## 8.1.1 (2023-01-09)
### Bug Fixes
* **Charts on demand:** Fixed issue that causes the skeleton to not load correctly ([20a497b](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/20a497b)) Closes [#97](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/97)

## 8.1.0 (2022-12-29)
### Features

* **Charts on demand:** Added new feature that allow you to create charts on demand from table data ([d9afc1c](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/d9afc1c46b7f463c8e2dc2845503848401c67324))

## 8.0.1 (2022-03-17)
### Features
* **LinePlusBarFocusChartConfiguration:** Add configuration for y2Axis ([58810a4](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/58810a4))

### DEPENDENCY UPDATES
* **Installed**: xmlhttprequest@1.6.2
* **Updated**: ontimize-web-ngx@8.5.9

## 8.0.0 (2020-08-25)
### DEPENDENCY UPDATES
* **Updated**: ontimize-web-ngx@8.0.0
* **Updated**: ontimize-web-ngx-nvd3@8.0.0
* **Updated**: nvd3-extra@1.0.0

## 8.0.0-rc.0 (2020-05-29)
### Features
* **angular8:** adapt code to Angular 8.

### DEPENDENCY UPDATES
* **Updated**: ontimize-web-ngx@8.0.0-rc.0

# 4.0.5
### Features
* **MultiBarHorizontalChartConfiguration**:
  * new `barColor` attribute.
  * label translations.
* **DiscreteBarChartConfiguration**: new `valueType` attribute.
* **LineChartConfiguration**, **StackedAreaChartConfiguration**, **CandlestickChartConfiguration**, **DiscreteBarChartConfiguration**, **MultiBarHorizontalChartConfiguration**, **MultiBarChartConfiguration**, **OHLCChartConfiguration**, **ScatterChartConfiguration**: attributes `xDataType` and `yDataType` now allows a format function from d3 library in addition to a string.

## 4.0.4 (2019-10-07)
### Features
* **o-chart**:
  * New attribute `noDataMessage` allows configure message to display if no data is provided
* **PieChartConfiguration**: new attributes `startAngle` and `endAngle` allows  manage the starting/ending angle of the pie/donut chart

### DEPENDENCY UPDATES
* **Updated**: ontimize-web-ngx-library-tools@4.0.2 (This change does not affect to user)
* **Updated**: ontimize-web-ngx@4.0.0 (This change does not affect to user)



## 4.0.3 (2019-05-22)
### DEPENDENCY UPDATES
* **Updated**: ontimize-web-nvd3@4.0.1 (This change does not affect to user)

## 4.0.2 (2019-05-21)
### Features
* **o-chart**: Fix D3 locale options

## 4.0.1 (2019-03-06)
### Features
* **ChartLegendConfiguration**: new `margin` attribute.
* **MultiBarHorizontalChartConfiguration**, **PieChartConfiguration**, **DonutChartConfiguration**: new `callback` attribute.

## 4.0.0 (2019-02-22)
### DEPENDENCY UPDATES
* **Updated**: ontimize-web-nvd3@4.0.0 (This change does not affect to user)
* **Updated**: ontimize-web-ngx@4.0.0 (This change does not affect to user)

### Features
* **PieChartConfiguration, MultiBarHorizontalChartOptions**: the attribute `valueType` now allows a format function from d3 library in addition to a string.
* **LinePlusBarFocusChartConfiguration**: the attributes `xDataType` and `yDataType` now allows a format function from d3 library in addition to a string.
* **o-chart**:
  * New attribute `colorData` for `pie` chart.

### BREAKING CHANGES
 * **o-chart**: attribute `colors` from `LinePlusBarFocusChartConfiguration`, `LineChartConfiguration`, `MultiBarChartConfiguration` and `ScatterChartConfiguration` has been renamed to `color`

## 4.0.0-rc.1 (2018-01-17)
### DEPENDENCY UPDATES
* **Updated**: ontimize-web-ngx@4.0.0-rc.1 (This change does not affect to user)

## 4.0.0-rc.0 (2018-11-16)
### DEPENDENCY UPDATES
* **Updated**: ontimize-web-ngx-nvd3@4.0.0-rc.0 (This change does not affect to user)
* **Updated**: ontimize-web-ngx@4.0.0-rc.0 (This change does not affect to user)

## 3.1.4-rc.1
### Features
* **o-chart**:
  * New options in `multiBarHorizontalChart`, `pie` and `donutChart` charts

### BREAKING CHANGES
 * **o-chart**: values `intAgrouped` and `floatAgrouped` for `xDataType`, `yDataType`, `valueType` attributes has been renamed to `intGrouped` and `floatGrouped`

## 3.1.4-rc.0 (2018-12-20)
### Features
* **o-chart**
  * New options to LineChart and LinePlusBarFocusChart

## 3.1.3 (2018-12-18)
### Bug Fixes
* **o-chart**
  * Greater separation between the texts of the legend
  * Greater margin between the graph and the legend

## 3.1.2 (2018-10-30)
### Features
* **o-chart**
  * Adding new chart types:
    * radarChart
    * parallelCoordinatesChart
    * bubbleChart
    * gaugeSimpleChart
    * stackedAreaChart
    * gaugeSlimChart
    * gaugeSpaceChart
    * gaugeDashboardChart
    * radialPercentChart
    * bulletChart
    * candlestickBarChart
    * linePlusBarWithFocusChart

### DEPENDENCY UPDATES
* **Removed**: ng2-nvd3.
* **Added**: ontimize-web-ngx-nvd3@3.0.0 (This change does not affect to user)

## 3.1.1 (2018-10-02)
### Features
* **o-chart**
  * Adding new chart types:
    * scatterChart
    * candlestickBarChart
    * ohlcBarChart
    * boxPlotChart
    * donutChart
    * multiBarHorizontalChart
    * linePlusBarWithFocusChart
    * forceDirectedGraph
  * Adding new `chart-parameters` input
  * Now extending OntimizeWeb `OServiceBaseComponent` class

### PEER-DEPENDENCY UPDATES
* **Updated**: ng2-nvd3 updated to latest version. Updating its reference to '@nois/ng2-nvd3' in the code.

## 3.1.0 (2018-09-17)
### PEER-DEPENDENCY UPDATES
* **Updated**: ontimize-web-ngx@3.1.0
### Bug Fixes
* **ontimize-web-ngx**: fixing bugs for updating to 'ontimize-web-ngx@3.1.0'

## 3.0.0 (2018-09-14)
### Features
* **o-chart**: New `query-on-bind` attribute ([505bf7c](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/505bf7c))

## 3.0.0-rc.1 (2018-07-02)
### Bug Fixes
* **ontimize-web-ngx**: fixing bugs for updating to '*ontimize-web-ngx@3.0.0-rc.1*'

## 3.0.0-rc.0 (2018-04-30)
### PEER-DEPENDENCY UPDATES ###
* **Updated**: core-js@2.5.3
* **Updated**: rxjs@5.5.6
* **Updated**: zone.js@0.8.20
* **Updated**: lodash@4.17.4

### Features
* **OChartModule**: updating library for usign '*ontimize-web-ngx@3.0.0*', including update to Angular 5 and Angular Material 5 ([a462da9](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/a462da9)) ([26dfd3d](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/26dfd3d))

## 2.0.1
### Bug Fixes
* **ChartService**: exporting '*ChartService*' ([#8](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/issues/8)) ([51516ab](https://github.com/OntimizeWeb/ontimize-web-ngx-charts/commit/51516ab))

## 2.0.0
### DEV-DEPENDENCY UPDATES ###
* **Updated**: ontimize-web-ng2@2.0.0

### BREAKING CHANGES
* **OChartModule**: '*ontimize-web-ng2-charts*' is now called '*ontimize-web-ngx-charts*'.

**IMPORTANT: you must update your imports for changing '*ontimize-web-ng2-charts*' for '*ontimize-web-ngx-charts*'. This includes module and components import and '*styles.scss*' reference.

## 2.0.0-rc.3
### Features
* **ontimize-web-ng2-charts**: '*OChartModule*' is now AoT compatible.

### DEV-DEPENDENCY UPDATES ###
* **Updated**: ontimize-web-ng2@2.0.0-rc.8
* **Updated**: @angular/cli@1.3.2
* **Updated**: @ngx-translate/core@8.0.0
* **Updated**: @angular@4.3.6
* **Updated**: @angular/material@2.0.0-beta.10
* **Updated**: @angular/cdk@2.0.0-beta.10
* **Updated**: @angular/flex-layout@2.0.0-beta.9

## 2.0.0-rc.2
### DEPENDENCY UPDATES ###
* **Added**: d3@^3.5.6
* **Added**: ng2-nvd3@git+https://github.com/daominhsangvn/ng2-nvd3.git
* **added**: nvd3@^1.8.4

### PEER-DEPENDENCY UPDATES ###
* **Updated**: rxjs@^5.4.2
* **Updated**: zone.js@^0.8.12

### DEV-DEPENDENCY UPDATES ###
* **Updated**: ontimize-web-ng2@2.0.0-rc.7
* **Updated**: typescript@2.3.4
* **Updated**: @angular/cli@1.2.7
* **Updated**: @ngx-translate/core@7.1.0
* **Updated**: @ngx-translate/http-loader@1.0.2
* **Updated**: @angular@4.3.3
* **Updated**: @angular/material@2.0.0-beta.8
* **Added**: @angular/cdk@2.0.0-beta.8
* **Removed**: d3@^3.5.6
* **Removed**: ng2-nvd3@git+https://github.com/daominhsangvn/ng2-nvd3.git
* **Removed**: nvd3@^1.8.4
* **Removed**: moment@2.18.1
* **Removed**: colresizable@1.6.0
* **Removed**: datatables.net@^1.10.12
* **Removed**: datatables.net-buttons@^1.2.1
* **Removed**: datatables.net-colreorder@^1.3.2
* **Removed**: datatables.net-select@^1.2.0
* **Removed**: jquery@^3.0.0
* **Removed**: jquery-ui@^1.12.0
* **Removed**: pdfmake@^0.1.18

## 2.0.0-rc.1
### Bug Fixes
* **Providers**: Fixing bugs in providers export functions.

## 2.0.0-rc.0
#Features
* **Styles**: including '*nvd3*' library styles. User will only need to import '*ontimize-web-ng2-charts*' '*styles.scss*' file.

### PEER-DEPENDENCY UPDATES ###
* **Removed**: ng2-nvd3@^1.1.3
* **Added**: ng2-nvd3@git+https://github.com/daominhsangvn/ng2-nvd3.git

### BREAKING CHANGES
* **Providers**: Removing '*chartsProviders*' export. User will no longer need to call this function on its module. Declaration of providers is now done with '*OChartModule*' module import.

## 1.0.0 (2016-12-01)
### Features
* **build:** initial version
