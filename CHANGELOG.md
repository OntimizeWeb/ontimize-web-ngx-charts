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