import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'clip-sla-trend',
  templateUrl: './sla-trend.component.html',
  styleUrls: ['./sla-trend.component.scss'],
})
export class SlaTrendComponent {
  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.3,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };
  
  public chartLabels = [
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
  ];
  public chartType: ChartType = 'line';
  public chartLegend = false;
  public chartData: ChartDataset[] = [
    {
      data: [0, 0, 2, 6, 2, 14, 10, 17, 20, 2, 4, 4],
      label: 'SLA',
      backgroundColor: '#31c7ac8c',
      borderColor: '#31c7ac',
      pointBackgroundColor: '#31c7ac00',
      pointBorderWidth: 0,
      pointBorderColor: '#31c7ac',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      fill: 'origin',
    },
    {
      data: [0, 1, 8, 10, 8, 22, 18, 18, 22, 8, 6, 4],
      label: 'Call Count',
      backgroundColor: 'rgba(248,244,254,0.8)',
      borderColor: '#562bf7',
      pointBackgroundColor: '#31c7ac00',
      pointBorderColor: '#562bf7',
      pointBorderWidth: 0,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)',
      fill: 'origin',
    }
  ];
}
