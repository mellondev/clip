import { Component } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'clip-agent-status',
  templateUrl: './agent-status.component.html',
  styleUrls: ['./agent-status.component.scss'],
})
export class AgentStatusComponent {
  
  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      }
    }
  };

  agentCount = 103;
  public chartLabels = ['Available', 'Busy', 'Break', 'Other'];
  public chartType: ChartType = 'doughnut';
  public chartLegend = true;
  public chartData: ChartDataset[] = [
    {
      data: [20, 59, 14, 10],
      label: 'Agent Status',
      backgroundColor: ['#8ac926', '#FAA61A', '#55acee', '#F04747', '#747f8d'],
    },
  ];
}
