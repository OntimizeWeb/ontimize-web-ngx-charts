import { OTableOptions, SQLTypes } from 'ontimize-web-ngx';
import { LineChartConfiguration } from '../../models/options/LineChartConfiguration.class';
import { MultiBarChartConfiguration } from '../../models/options/MultiBarChartConfiguration.class';
import { MultiBarHorizontalChartConfiguration } from '../../models/options/MultiBarHorizontalChartConfiguration.class';
import { StackedAreaChartConfiguration } from '../../models/options/StackedAreaChartConfiguration.class';

import { ChartConfigurationUtils } from './../../models/chart-configuration-utils';
import { ChartConfiguration } from './../../models/options/ChartConfiguration.class';
import { DiscreteBarChartConfiguration } from './../../models/options/DiscreteBarChartConfiguration.class';
import { PieChartConfiguration } from './../../models/options/PieChartConfiguration.class';
import { OChartPreferences } from './../../types/chart-preferences.type';

declare var d3: any;

export class OChartOnDemandUtils {

  public static configureChart(preferences: OChartPreferences, oTableOptions: OTableOptions): ChartConfiguration {
    let chartConf: ChartConfiguration = ChartConfigurationUtils.getConfigurationForType(preferences.selectedTypeChart);
    if (chartConf != undefined) {
      chartConf.xAxis = preferences.selectedXAxis;
      chartConf.yAxis = preferences.selectedYAxis;
      chartConf.xLabel = preferences.selectedXAxis;
      chartConf.yLabel = preferences.selectedYAxis.toString();
      switch (preferences.selectedTypeChart) {
        case 'line':
          this.configureLineChart(chartConf as LineChartConfiguration, preferences, oTableOptions);
          break;
        case 'discreteBar':
          this.configureDiscreteBarChart(chartConf as DiscreteBarChartConfiguration, preferences, oTableOptions);
          break;
        case 'multiBar':
          this.configureMultiBarChart(chartConf as MultiBarChartConfiguration, preferences, oTableOptions);
          break;
        case 'stackedAreaChart':
          this.configureAreaChart(chartConf as StackedAreaChartConfiguration, preferences, oTableOptions);
          break;
        case 'pie':
        case 'donutChart':
          this.configurePieChart(chartConf as PieChartConfiguration, preferences, oTableOptions);
          break;
      }
    }

    return chartConf;
  }

  protected static configureLineChart(chartConf: LineChartConfiguration, preferences: OChartPreferences, oTableOptions: OTableOptions): void {
    chartConf.color = preferences.selectedPalette;
    this.configureAxisFormat(chartConf, preferences, oTableOptions);
  }
  protected static configureDiscreteBarChart(chartConf: DiscreteBarChartConfiguration, preferences: OChartPreferences, oTableOptions: OTableOptions): void {
    chartConf.agroup = true;
    chartConf.showLegend = true;
    chartConf.color = preferences.selectedPalette;
    this.configureAxisFormat(chartConf, preferences, oTableOptions);
  }
  protected static configureMultiBarChart(chartConf: MultiBarChartConfiguration, preferences: OChartPreferences, oTableOptions: OTableOptions): void {
    chartConf.color = preferences.selectedPalette;
    this.configureAxisFormat(chartConf, preferences, oTableOptions);
  }
  protected static configureAreaChart(chartConf: StackedAreaChartConfiguration, preferences: OChartPreferences, oTableOptions: OTableOptions): void {
    chartConf.color = preferences.selectedPalette;
    this.configureAxisFormat(chartConf, preferences, oTableOptions);
  }
  protected static configurePieChart(chartConf: PieChartConfiguration, preferences: OChartPreferences, oTableOptions: OTableOptions): void {
    chartConf.legendPosition = 'bottom';
    chartConf.labelType = 'value';
    chartConf.color = preferences.selectedPalette;
    const formatCallback = OChartOnDemandUtils.getAxisFormatCallback(preferences.selectedYAxisType, preferences.selectedYAxis[0], oTableOptions);
    if (formatCallback != undefined) {
      chartConf.valueType = formatCallback;
    }
  }

  private static configureAxisFormat(chartConf: ChartConfiguration, preferences: OChartPreferences, oTableOptions: OTableOptions): void {
    let formatCallback = OChartOnDemandUtils.getAxisFormatCallback(preferences.selectedXAxisType, preferences.selectedXAxis, oTableOptions);
    if (formatCallback != undefined) {
      chartConf.xDataType = formatCallback;
    }
    formatCallback = OChartOnDemandUtils.getAxisFormatCallback(preferences.selectedYAxisType, preferences.selectedYAxis[0], oTableOptions);
    if (formatCallback != undefined) {
      chartConf.yDataType = formatCallback;
    }
  }
  public static getAxisFormatCallback(axisType: number, axisName: string, oTableOptions: OTableOptions): any {
    //TODO review integer and decimal format...
    if (this.isInteger(axisType)) {
      return "intGrouped";
    } else if (this.isDecimal(axisType)) {
      if (this.isCurrency(axisName, oTableOptions)) {
        return "currency";
      } else if (this.isPercentage(axisName, oTableOptions)) {
        return "percentage";
      }
      return "float";
    } else if (this.isDate(axisType)) {
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

  public static isCurrency(column: string, oTableOptions: OTableOptions): boolean {
    return oTableOptions.columns.filter(oCol => oCol.type === "currency" && oCol.attr === column).length == 1;
  }

  public static isPercentage(column: string, oTableOptions: OTableOptions): boolean {
    return oTableOptions.columns.filter(oCol => oCol.type === "percentage" && oCol.attr === column).length == 1;
  }

}