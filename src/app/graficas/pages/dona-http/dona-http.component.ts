import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { GraficaService } from '../../services/grafica.service';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {


  public doughnutChartLabels: string[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' 
    ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [ 
          //350, 450, 100 ,100,200
        ],
        backgroundColor: ['#6405F0','#0724E3', '#05A0F0','#05A03A','0724A6']
      }
 
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';


  constructor(private graficasServices : GraficaService) { }

  ngOnInit(): void {

    this.graficasServices.getUsurioRedesSociales()
    .subscribe(data => {
      console.log(data);
      const labels = Object.keys(data);
      const values = Object.values(data);
      console.log(labels);
      console.log(values);
      this.doughnutChartData ={
        labels:Object.keys(data),
        datasets:[{data:Object.values(data)}]
      }
 

    })
  } 


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
