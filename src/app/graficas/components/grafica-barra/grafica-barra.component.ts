import { Component, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.less']
})
export class GraficaBarraComponent {


  @Input() horizontal: boolean = false;
  @Input() labelsData: string[] = [];


  @Input() dataChar: ChartDataset<any> = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Columna A', backgroundColor: '#FC0590', hoverBackgroundColor: '#6905F2' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Columna B' },
    //{ data: [28, 48, 50, 49, 86, 27, 90], label: 'Columna C' }
  ]

  public barChartData: ChartData<'bar'> = {
    labels: this.labelsData,
    datasets: []
  };  


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;



  //Define el diseño
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [];


  constructor() {
    console.log(this.horizontal);
  }

  ngOnInit(): void {

    console.log(this.dataChar);

    if (this.horizontal) {
      this.barChartType = 'line';
    }

    this.barChartData.datasets.push({
      data: this.dataChar
    })
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true
  };



  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }



}
