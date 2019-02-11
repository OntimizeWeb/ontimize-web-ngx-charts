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

}
