import { SQLTypes } from 'ontimize-web-ngx';

import { ChartConfigurationUtils } from './../../models/chart-configuration-utils';
import { ChartConfiguration } from './../../models/options/ChartConfiguration.class';
import { DiscreteBarChartConfiguration } from './../../models/options/DiscreteBarChartConfiguration.class';
import { PieChartConfiguration } from './../../models/options/PieChartConfiguration.class';
import { OChartPreferences } from './../../types/chart-preferences.type';

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
        case 'discreteBar':
          this.configureDiscreteBarChart(chartConf as DiscreteBarChartConfiguration, preferences);
          break;
        case 'multiBar':
          this.configureMultiBarChart(chartConf, preferences);
          break;
        case 'stackedAreaChart':
          this.configureAreaChart(chartConf, preferences);
          break;
        case 'pie':
        case 'donutChart':
          this.configurePieChart(chartConf as PieChartConfiguration, preferences);
          break;
      }
    }

    return chartConf;
  }

  protected static configureLineChart(chartConf: ChartConfiguration, preferences: OChartPreferences): void {
    this.configureAxisFormat(chartConf, preferences);
  }
  protected static configureDiscreteBarChart(chartConf: DiscreteBarChartConfiguration, preferences: OChartPreferences): void {
    chartConf.agroup = true;
    this.configureAxisFormat(chartConf, preferences);
  }
  protected static configureMultiBarChart(chartConf: ChartConfiguration, preferences: OChartPreferences): void {
    this.configureAxisFormat(chartConf, preferences);
  }
  protected static configureAreaChart(chartConf: ChartConfiguration, preferences: OChartPreferences): void {
    this.configureAxisFormat(chartConf, preferences);
  }
  protected static configurePieChart(chartConf: PieChartConfiguration, preferences: OChartPreferences): void {
    chartConf.legendPosition = 'bottom';
    chartConf.labelType = 'value';
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