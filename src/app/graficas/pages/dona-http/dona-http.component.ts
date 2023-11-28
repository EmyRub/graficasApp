import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';


@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.less']
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartType: ChartType = 'doughnut';

  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: []
  };

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {

    //PRIMERA MÉTODOLOGÍA 
    //this.graficasService.getUsuariosRedesSociales()
    //  .subscribe(data => {
    //
    //objeto propio de JS, es un método de todos los objetos
    //Entregará las llaves
    //  const labels = Object.keys(data);
    // const values = Object.values(data);

    //  this.doughnutChartLabels = labels;

    //  this.doughnutChartData.datasets.push({
    //   data: values,
    //   backgroundColor: ['#77D62B', '#DEA83C', '#C73F3F', '#5F3CDE', '#39D4C8'],
    //  hoverBackgroundColor: ['#67B324', '#B38730', '#BD3C3C', '#5333BD', '#33BDB6']
    // });

    // });

    //SEGUNDA MÉTODOLOGIA
    this.graficasService.getUsuariosRedesSocialesDonaData()
      //Desestructura los labels y los values
      .subscribe(({ labels, values }) => {
        this.doughnutChartLabels = labels;

        this.doughnutChartData.datasets.push({
          data: values
        });
        
      });

  }

}
