import { PieChartConfiguration } from './../../models/options/PieChartConfiguration.class';
import { OChartPreferences } from './../../types/chart-preferences.type';
import { ChartConfigurationUtils } from './../../models/chart-configuration-utils';
import { ChartConfiguration } from './../../models/options/ChartConfiguration.class';
import { SQLTypes } from "ontimize-web-ngx";

declare var d3: any;

export class OChartOnDemandUtils {

  public static configureChart(preferences: OChartPreferences): ChartConfiguration {
    let chartConf: ChartConfiguration = ChartConfigurationUtils.getConfigurationForType(preferences.selectedTypeChart);
    if (chartConf != undefined) {
      chartConf.xAxis = preferences.selectedXAxis;
      chartConf.yAxis = preferences.selectedYAxis;
      chartConf.xLabel = preferences.selectedXAxis;
      chartConf.yLabel = preferences.selectedYAxis.toString();

      switch (preferences.selectedTypeChart) {
      case 'line':
          this.configureLineChart(chartConf, preferences);
        break;
      case 'multibar':
          this.configureMultiBarChart(chartConf, preferences);
        break;
      case 'stackedAreaChart':
          this.configureAreaChart(chartConf, preferences);
        break;
      case 'pie':
          this.configurePieChart(chartConf as PieChartConfiguration, preferences);
        break;
    }
    }

    return chartConf;
  }

  protected static configureLineChart(chartConf: ChartConfiguration, preferences: OChartPreferences): void {
    // this.chartParametersLineChart.xAxis = this.currentPreference.selectedXAxis;
    // this.chartParametersLineChart.yAxis = this.currentPreference.selectedYAxis;
    // this.chartParametersLineChart.xLabel = this.currentPreference.selectedXAxis;
    // this.chartParametersLineChart.yLabel = this.currentPreference.selectedYAxis.toString();
    // let formatCallback = OChartOnDemandUtils.getAxisFormatCallback(this.currentPreference.selectedXAxisType);
    // if (formatCallback != undefined) {
    //   this.chartParametersLineChart.xDataType = formatCallback;
    // }
    // formatCallback = OChartOnDemandUtils.getAxisFormatCallback(this.currentPreference.selectedYAxisType);
    // if (formatCallback != undefined) {
    //   this.chartParametersLineChart.yDataType = formatCallback;
    // }
    this.configureAxisFormat(chartConf, preferences);
  }
  protected static configureMultiBarChart(chartConf: ChartConfiguration, preferences: OChartPreferences): void {
    // this.chartParametersMultiBarChart.xAxis = this.currentPreference.selectedXAxis;
    // this.chartParametersMultiBarChart.yAxis = this.currentPreference.selectedYAxis;
    // this.chartParametersMultiBarChart.xLabel = this.currentPreference.selectedXAxis;
    // this.chartParametersMultiBarChart.yLabel = this.currentPreference.selectedYAxis.toString();
    // let formatCallback = OChartOnDemandUtils.getAxisFormatCallback(this.currentPreference.selectedXAxisType);
    // if (formatCallback != undefined) {
    //   this.chartParametersMultiBarChart.xDataType = formatCallback;
    // }
    // formatCallback = OChartOnDemandUtils.getAxisFormatCallback(this.currentPreference.selectedYAxisType);
    // if (formatCallback != undefined) {
    //   this.chartParametersMultiBarChart.yDataType = formatCallback;
    // }
    this.configureAxisFormat(chartConf, preferences);
  }
  protected static configureAreaChart(chartConf: ChartConfiguration, preferences: OChartPreferences): void {
    // this.chartParametersAreaChart.xAxis = this.currentPreference.selectedXAxis;
    // this.chartParametersAreaChart.yAxis = this.currentPreference.selectedYAxis;
    // this.chartParametersAreaChart.xLabel = this.currentPreference.selectedXAxis;
    // this.chartParametersAreaChart.yLabel = this.currentPreference.selectedYAxis.toString();
    // let formatCallback = OChartOnDemandUtils.getAxisFormatCallback(this.currentPreference.selectedXAxisType);
    // if (formatCallback != undefined) {
    //   this.chartParametersAreaChart.xDataType = formatCallback;
    // }
    // formatCallback = OChartOnDemandUtils.getAxisFormatCallback(this.currentPreference.selectedYAxisType);
    // if (formatCallback != undefined) {
    //   this.chartParametersAreaChart.yDataType = formatCallback;
    // }
    this.configureAxisFormat(chartConf, preferences);
  }
  protected static configurePieChart(chartConf: PieChartConfiguration, preferences: OChartPreferences): void {
    // this.chartParametersPieChart.xAxis = this.currentPreference.selectedXAxis;
    // this.chartParametersPieChart.yAxis = this.currentPreference.selectedYAxis;
    // this.chartParametersPieChart.xLabel = this.currentPreference.selectedXAxis;
    // this.chartParametersPieChart.yLabel = this.currentPreference.selectedYAxis.toString();
    chartConf.legendPosition = 'bottom';
    const formatCallback = OChartOnDemandUtils.getAxisFormatCallback(preferences.selectedYAxisType);
    if (formatCallback != undefined) {
      chartConf.valueType = formatCallback;
    }
  }

  private static configureAxisFormat(chartConf: ChartConfiguration, preferences: OChartPreferences): void {
    let formatCallback = OChartOnDemandUtils.getAxisFormatCallback(preferences.selectedXAxisType);
    if (formatCallback != undefined) {
      chartConf.xDataType = formatCallback;
    }
    formatCallback = OChartOnDemandUtils.getAxisFormatCallback(preferences.selectedYAxisType);
    if (formatCallback != undefined) {
      chartConf.yDataType = formatCallback;
    }
  }

  public static getAxisFormatCallback(arg: number): any {
    //TODO review integer and decimal format...
    if (this.isInteger(arg)) {
      return d => d3.format('.02f')(d);
    } else if (this.isDecimal(arg)) {
      return d => d3.format('.02f')(d);
    } else if (this.isDate(arg)) {
      return "time";
    }
  }

  public static isDate(arg: number): boolean {
    return [
      SQLTypes.DATE,
      SQLTypes.TIME,
      SQLTypes.TIMESTAMP
    ].indexOf(arg) !== -1;
  }

  public static isInteger(arg: number): boolean {
    return [
      SQLTypes.TINYINT,
      SQLTypes.SMALLINT,
      SQLTypes.INTEGER,
      SQLTypes.BIGINT
    ].indexOf(arg) !== -1;
  }

  public static isDecimal(arg: number): boolean {
    return [
      SQLTypes.FLOAT,
      SQLTypes.REAL,
      SQLTypes.DOUBLE,
      SQLTypes.NUMERIC,
      SQLTypes.DECIMAL
    ].indexOf(arg) !== -1;
  }

}