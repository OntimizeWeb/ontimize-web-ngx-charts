## 2.0.0-rc.3
### Features
* **ontimize-web-ng2-charts**: '*OChartModule*' is now AoT compatible.

### DEV-DEPENDENCY UPDATES ###
* **Updated**:  ontimize-web-ng2@2.0.0-rc.8
* **Updated**:  @angular/cli@1.3.2
* **Updated**:  @ngx-translate/core@8.0.0
* **Updated**:  @angular@4.3.6
* **Updated**:  @angular/material@2.0.0-beta.10
* **Updated**:  @angular/cdk@2.0.0-beta.10
* **Updated**:  @angular/flex-layout@2.0.0-beta.9

## 2.0.0-rc.2

### DEPENDENCY UPDATES ###
* **Added**:  d3@^3.5.6
* **Added**:  ng2-nvd3@git+https://github.com/daominhsangvn/ng2-nvd3.git
* **added**:  nvd3@^1.8.4

### PEER-DEPENDENCY UPDATES ###
* **Updated**:  rxjs@^5.4.2
* **Updated**:  zone.js@^0.8.12

### DEV-DEPENDENCY UPDATES ###
* **Updated**:  ontimize-web-ng2@2.0.0-rc.7
* **Updated**:  typescript@2.3.4
* **Updated**:  @angular/cli@1.2.7
* **Updated**:  @ngx-translate/core@7.1.0
* **Updated**:  @ngx-translate/http-loader@1.0.2
* **Updated**:  @angular@4.3.3
* **Updated**:  @angular/material@2.0.0-beta.8
* **Added**:    @angular/cdk@2.0.0-beta.8
* **Removed**:  d3@^3.5.6
* **Removed**:  ng2-nvd3@git+https://github.com/daominhsangvn/ng2-nvd3.git
* **Removed**:  nvd3@^1.8.4
* **Removed**:  moment@2.18.1
* **Removed**:  colresizable@1.6.0
* **Removed**:  datatables.net@^1.10.12
* **Removed**:  datatables.net-buttons@^1.2.1
* **Removed**:  datatables.net-colreorder@^1.3.2
* **Removed**:  datatables.net-select@^1.2.0
* **Removed**:  jquery@^3.0.0
* **Removed**:  jquery-ui@^1.12.0
* **Removed**:  pdfmake@^0.1.18

## 2.0.0-rc.1
### Bug Fixes
* **Providers**: Fixing bugs in providers export functions.

## 2.0.0-rc.0
#Features
* **Styles**: including '*nvd3*' library styles. User will only need to import '*ontimize-web-ng2-charts*' '*styles.scss*' file.

### PEER-DEPENDENCY UPDATES ###
* **Removed**:   ng2-nvd3@^1.1.3
* **Added**:     ng2-nvd3@git+https://github.com/daominhsangvn/ng2-nvd3.git

### BREAKING CHANGES
* **Providers**: Removing '*chartsProviders*' export. User will no longer need to call this function on its module. Declaration of providers is now done with '*OChartModule*' module import.

## 1.0.0 (2016-12-01)

### Features

* **build:** initial version