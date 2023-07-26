import { Component } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'clip-logged-in-trend',
  templateUrl: './logged-in-trend.component.html',
  styleUrls: ['./logged-in-trend.component.scss'],
})
export class LoggedInTrendComponent {
  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        }
      },
      y: {
        display: false,
        grid: {
          display: false,

        }
      },
    }
  };

  agentCount = 103;
  public chartLabels = ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];
  public chartType: ChartType = 'bar';
  public chartLegend = false;
  public chartData: ChartDataset[] = [
    {
      data: [0, 1, 8, 10,8, 22, 18, 18, 22, 8, 6, 4],
      label: 'Call Count',
      backgroundColor: ['#55acee'],
    },
  ];
}
