import { Component } from '@angular/core';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styleUrls: ['./barras-doble.component.less']
})
export class BarrasDobleComponent {

  labelsData: string[] = ['2021', '2022', '2023', '2024', '2025'];

  provedorData: ChartDataset<any> = [
    { data: [100, 200, 300, 400, 500], label: 'Vendedor A',backgroundColor: '#FC0590', hoverBackgroundColor: '#6905F2' },
    { data: [50, 250, 30, 450, 200], label: 'Vendedor B' }
  ];

  productData: ChartDataset<any>  = [
    { data: [200, 300, 400, 300, 100], label: 'Carros', backgroundColor: 'blue' }
  ];


}
