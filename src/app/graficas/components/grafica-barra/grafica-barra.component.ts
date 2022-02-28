import { Component, OnInit,ViewChild  } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
    datasets: [
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series A' ,backgroundColor: '#ED5F76',hoverBackgroundColor:'red'},
      { data: [ 8, 38, 70, 59, 66, 80, 100 ], label: 'Series B',backgroundColor: '#F763C4' ,hoverBackgroundColor:'red'}
    ]
  };

   // events
   public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
