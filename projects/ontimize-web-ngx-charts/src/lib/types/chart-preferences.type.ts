

export type OChartPreferences = {
  title: string
  subtitle: string,
  entity: string,
  service: string,
  selectedXAxis: string,
  selectedYAxis: string,
  selectedTypeChart: any,
  selectedXAxisType: string,
  selectedYAxisType: string
}
export class DefaultOChartPreferences implements OChartPreferences {
  public title: string;
  public subtitle: string;
  public entity: string;
  public service: string;
  public selectedXAxis: string;
  public selectedYAxis: string;
  public selectedTypeChart: any;
  public selectedXAxisType: string;
  public selectedYAxisType: string;
  constructor() {
    this.title = '';
    this.subtitle = '';
    this.entity = '';
    this.service = '';
    this.selectedXAxis = '';
    this.selectedYAxis = '';
    this.selectedXAxisType = '';
    this.selectedYAxisType = '';
  }
}

