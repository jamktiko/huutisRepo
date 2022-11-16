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

  namearr = [
    {
      vaihtoehto: 'pizza',
      names: ['Aaran', 'Aaren', 'Aarez', 'Aarman', 'Aaron'],
    },
    {
      vaihtoehto: 'pasta',
      names: ['Aaran', 'Aaren', 'Aarez', 'Aarman', 'Aaron'],
    },
    {
      vaihtoehto: 'burgir',
      names: ['Aaran', 'Aaren', 'Aarez', 'Aarman', 'Aaron'],
    },
  ];

  ngOnInit(): void {
    Chart.register(...registerables);
    // new bar chart -S
    let myChart = new Chart('myChart', {
      type: 'bar',
      //labels for data, in real version these would be the voting options -S
      data: {
        labels: ['pizza', 'pasta', 'burgir'],
        datasets: [
          {
            label: '# of Votes',
            //data and their representing colors, in real version these would be the results of the vote -S
            data: [5, 5, 5],
            backgroundColor: [
              'rgba(27, 223, 6)',
              'rgba(31, 229, 182)',
              'rgba(89, 255, 0)',
              'rgba(37, 242, 196)',
              'rgba(110, 230, 98)',
              'rgba(142, 233, 209)',
              'rgba(132, 224, 44)',
              'rgba(102, 133, 109)',
              'rgba(90, 153, 61)',
              'rgba(69, 69, 69)',
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
