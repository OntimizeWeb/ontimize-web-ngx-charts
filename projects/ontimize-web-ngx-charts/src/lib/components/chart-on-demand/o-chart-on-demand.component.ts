import { ChangeDetectorRef, Component, Inject, Input, TemplateRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatSidenav } from '@angular/material';
import { OComboComponent, OntimizeService, OValueChangeEvent } from 'ontimize-web-ngx';

import { DiscreteBarChartConfiguration } from '../../models/options/DiscreteBarChartConfiguration.class';
import { LineChartConfiguration } from '../../models/options/LineChartConfiguration.class';
import { MultiBarChartConfiguration } from '../../models/options/MultiBarChartConfiguration.class';
import { MultiBarHorizontalChartConfiguration } from '../../models/options/MultiBarHorizontalChartConfiguration.class';
import { PieChartConfiguration } from '../../models/options/PieChartConfiguration.class';
import { StackedAreaChartConfiguration } from '../../models/options/StackedAreaChartConfiguration.class';
import { OChartComponent } from '../../ontimize-web-ngx-charts.module';
import { D3LocaleService } from '../../services/d3Locale.service';

declare var d3: any;


@Component({
  selector: 'o-chart-on-demand',
  templateUrl: './o-chart-on-demand.component.html',
  styleUrls: ['./o-chart-on-demand.component.css']
})

export class OChartOnDemandComponent {

  public chartParametersLineChart: LineChartConfiguration;
  public chartParametersDiscreteBarChart: DiscreteBarChartConfiguration;
  public chartParametersMultiBarHorizontalChart: MultiBarHorizontalChartConfiguration;
  public chartParametersMultiBarChart: MultiBarChartConfiguration;
  public chartParametersAreaChart: StackedAreaChartConfiguration;
  public chartParametersPieChart: PieChartConfiguration;
  public arrayComboYAxis: Array<Object>;
  public entity;
  showLineChart: boolean = false;
  showMultiBarHorizontalChart: boolean = false;
  showMultiBarChart: boolean = false;
  showAreaChart: boolean = false;
  showPieChart: boolean = false;
  showPlaceholder: boolean = true;
  dateXAxis: boolean = false;
  dateYAxis: boolean = false;

  @ViewChild('wrapper', { static: false }) template: TemplateRef<any>;
  @ViewChild('comboXAxis', { static: true }) comboXAxis: OComboComponent;
  @ViewChild('comboYAxis', { static: true }) comboYAxis: OComboComponent;
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  @ViewChild('pieChart', {static: false}) pieChart: OChartComponent;
  @ViewChild('lineChartBasic', {static: false}) lineChartBasic:OChartComponent;
  @ViewChild('multiBarHorizontal', {static: false}) multiBarHorizontal:OChartComponent;
  @ViewChild('multiBar', {static: false}) multiBar: OChartComponent;
  @ViewChild('stackedAreaChart', {static:false}) stackedAreaChart: OChartComponent;
  opened: boolean = true;


  private _arrayColumns = [];
  arrayYAxis = [];
  selectedDataType: any;

  @Input() description: string = '';
  @Input() buttonText: string = '';
  @Input()
  set arrayColumns(value: Array<Object>) {
    this.hideGraphic();
    this.arrayComboYAxis = [];
    this.selectedYAxis = "";
    this._arrayColumns = value;
    this.comboXAxis.setDataArray(value);
    this.comboYAxis.setDataArray(value);
    if (this.comboYAxis.value != undefined) {
      this.comboYAxis.clearValue();
    }
    this.comboXAxis.setValue(undefined);

  }

  selectedXAxis: string;
  selectedYAxis: string;
  selectedTypeChart: any;

  fixedInViewport = true;

  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef,
    private d3LocaleService: D3LocaleService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('graphics'));
    const d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this._configureLineChart(d3Locale);
    this._configureMultiBarHotizontalChart(d3Locale);
    this._configureMultiBarChart(d3Locale);
    this._configAreaChart(d3Locale);
    this._configurePieChart(d3Locale);

  }

  openDialog() {
    this.dialog.open(this.template, { data: this.description });
  }

  captureValueYAxis(event: any) {
    this.arrayComboYAxis = [];
    this.selectedYAxis = "";
    this.arrayComboYAxis = event;
    this.selectedYAxis = event;
    this.showChart();
  }

  captureValueXAxis(event: OValueChangeEvent) {
    this.selectedXAxis = "";
    this.selectedXAxis = event.newValue;

    this.showChart();
  }

  captureTypeChart(event: OValueChangeEvent) {
    this.selectedTypeChart = event.newValue;
    this.showChart();
  }



  showChart() {

    this.hideGraphic();

    console.log("selectedXAxis " + this.selectedXAxis);
    console.log("array comboYAxis  " + this.arrayComboYAxis);
    console.log("selectedTypeChart " + this.selectedTypeChart);

    if (this.selectedXAxis != undefined) {
      if (this.selectedYAxis != undefined && this.selectedYAxis.length != 0) {
        if (this.selectedTypeChart != undefined) {
          console.log("Pinto y coloreo");
          this.showGraphic();
        }
      }
    } else {
      this.hideGraphic();
    }
  }


  hideGraphic() {
    this.showLineChart = false;
    this.showMultiBarHorizontalChart = false;
    this.showMultiBarChart = false;
    this.showPieChart = false;
    this.showAreaChart = false;
    this.showPlaceholder = true;
  }


  showGraphic() {

    this.showPlaceholder = false;

    console.log(this.lineChartBasic);

    if (this.selectedTypeChart == 1) {
      setTimeout(() => {
        this.lineChartBasic.setChartConfiguration(this.chartParametersLineChart);
        console.log("this.lineChartBasic " + this.lineChartBasic);

        this.showLineChart = true;

      });
    } else if (this.selectedTypeChart == 2) {
      setTimeout(() => {
        this.showMultiBarHorizontalChart = true;
        this.multiBarHorizontal.setChartConfiguration(this.chartParametersMultiBarHorizontalChart);

      });
    } else if (this.selectedTypeChart == 3) {
      setTimeout(() => {
        this.showMultiBarChart = true;
        this.multiBar.setChartConfiguration(this.chartParametersMultiBarChart);

      });
    } else if (this.selectedTypeChart == 4) {
      setTimeout(() => {
        this.showAreaChart = true;
        this.stackedAreaChart.setChartConfiguration(this.chartParametersAreaChart);

      });
    }
    else if (this.selectedTypeChart == 5){
      setTimeout(() => {
        this.showPieChart = true;
        this.pieChart.setChartConfiguration(this.chartParametersPieChart);

      });
    }
  }


  get arrayColumns(): Array<Object> {
    return this._arrayColumns;
  }

  array: Array<Object> = [];

  getDataArrayRadioGraphics() {
    this.array = [];
    this.array.push({
      'key': 1,
      'value': 'Line'
    });
    this.array.push({
      'key': 2,
      'value': 'Multi Bar Horizontal'
    });
    this.array.push({
      'key': 3,
      'value': 'Multi Bar'
    });
    this.array.push({
      'key': 4,
      'value': 'Area'
    });
    this.array.push({
      'key': 5,
      'value': 'Pie'
    });
    return this.array;
  }

  getValue() {
    return 1;
  }

  getValueDao(): any[] {
    return this.arrayColumns;
  }


  getData() {
    return this.arrayColumns;
  }

  captureValueComboDataTypeXAxis(eventXAxis: OValueChangeEvent){
    var elementXAxis = this.arrayDataType.find(item => item.key == eventXAxis.newValue);
    console.log("elementXAxis " + elementXAxis);

    this.chartParametersLineChart.xDataType = elementXAxis.f;
    this.chartParametersMultiBarHorizontalChart.xDataType = elementXAxis.f;
    this.chartParametersMultiBarChart.xDataType = elementXAxis.f;
    this.chartParametersAreaChart.xDataType = elementXAxis.f;
    this.chartParametersPieChart.valueType = elementXAxis.f;

    if(elementXAxis != undefined){
      //this.captureValueComboDataTypeYAxis();
    }else{
    console.log("seleccione eje y");
    }
  }


  captureValueComboDataTypeYAxis (eventYAxis:OValueChangeEvent ){
    // this.selectedDataType = event.newValue;
    // console.log("this.selectedDataType " + this.selectedDataType);
    let elementYAxis = this.arrayDataType.find(item => item.key == eventYAxis.newValue);
    console.log("elementYAxis " + elementYAxis);

    this.chartParametersLineChart.yDataType = elementYAxis.f;
    this.chartParametersMultiBarHorizontalChart.yDataType = elementYAxis.f;
    this.chartParametersMultiBarChart.yDataType = elementYAxis.f;
    this.chartParametersAreaChart.yDataType = elementYAxis.f;
    this.chartParametersPieChart.valueType = elementYAxis.f;

    if(elementYAxis !=undefined){
      this.showGraphic();
    }
  }

  arrayDataType: Array<any> = [];

  getArrayDataType() {
    this.arrayDataType = [];
    this.arrayDataType.push({
      'key': 1,
      'value': 'Number',
      'f': d => d3.format('d')(d)
   });
    this.arrayDataType.push({
      'key': 2,
      'value': 'Decimal ',
      'f': d => d3.format('.02f')(d)

    });
    this.arrayDataType.push({
      'key': 3,
      'value': 'Date',
      'f': d => d3.time.format('%x')(new Date(d))

    });
    this.arrayDataType.push({
      'key': 4,
      'value': 'Interest',
      'f': d => d3.format('.0%')(d)

    });
    this.arrayDataType.push({
      'key': 5,
      'value': 'Name'
    });
    this.arrayDataType.push({
      'key': 6,
      'value': 'Amount'
    });
    return this.arrayDataType;
  }


  private _configureLineChart(locale: any): void {
    this.chartParametersLineChart = new LineChartConfiguration();
  }

  private _configureMultiBarHotizontalChart(locale: any): void {
    this.chartParametersMultiBarHorizontalChart = new MultiBarHorizontalChartConfiguration();
  }

  private _configureMultiBarChart(locale: any): void{
    this.chartParametersMultiBarChart = new MultiBarChartConfiguration();
  }


  private _configAreaChart(locale: any): void {
    this.chartParametersAreaChart = new StackedAreaChartConfiguration();
  }


  private _configurePieChart(locale: any): void {
    this.chartParametersPieChart = new PieChartConfiguration();

    this.chartParametersPieChart.legendPosition = 'bottom';

  }

}
