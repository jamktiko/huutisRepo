import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { registerables } from 'chart.js';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    Chart.register(...registerables);
    let myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: '# of Votes',
            data: [7, 9, 3, 5, 1, 2],
            backgroundColor: [
              'rgba(27, 223, 6)',
              'rgba(31, 229, 182)',
              'rgba(89, 255, 0)',
              'rgba(37, 242, 196)',
              'rgba(110, 230, 98)',
              'rgba(142, 233, 209)',
            ],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
