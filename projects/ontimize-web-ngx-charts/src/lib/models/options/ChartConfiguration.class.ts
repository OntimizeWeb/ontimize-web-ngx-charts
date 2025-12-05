import { OTranslateService } from 'ontimize-web-ngx';

export class ChartConfiguration {

  public type: string;
  public height: number;
  public width: number;

  public xLabel: string;
  public yLabel: string;

  public xDataType: any;
  public yDataType: any;

  public xAxis: string;
  public yAxis: string[];

  public translateService: OTranslateService;

  public data: Object;

  public showTooltip: boolean;
  public showLegend: boolean;
  public showGridLines: boolean;
  public showDataLabel: boolean;
  public showXAxisLabel: boolean;
  public showYAxisLabel: boolean;

  public legendPosition: string;
  public legendTitle: string;

  public xFormatting: any;
  public yFormatting: any;

  public autoScale: boolean;
  public chartParameters: any;

  public color: { domain: string[] } | object;

  public gradient: boolean;
  public activeEntries: any[];

  public customColors?: any;

  public callback: () => void;
}
