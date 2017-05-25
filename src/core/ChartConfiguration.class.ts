import { OTranslateService } from 'ontimize-web-ng2';

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
