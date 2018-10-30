import { OTranslateService } from 'ontimize-web-ngx';
import { ChartTitleConfiguration } from './chart-options/ChartTitleConfiguration.class';

export class ChartConfiguration {
  public type: string;
  public height: number;
  public width: number;

  public xLabel: string;
  public yLabel: string;

  public xDataType: string;
  public yDataType: string;

  public xAxis: string;
  public yAxis: Array<string>;

  public translateService: OTranslateService;
}
