import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { registerables } from 'chart.js';
import { Subscription } from 'rxjs';
import { WebsockethandlerService } from '../AWSapi.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  id!: number;
  subscription!: Subscription;

  data!: any;
  subscriptionData!: Subscription;
  labels: any = [];

  labelSubscription!: Subscription;
  labelData!: any;

  constructor(private AWS: WebsockethandlerService) {}

  ngOnInit(): void {
    this.subscription = this.AWS.currentIdentification.subscribe(
      (idn) => (this.id = idn)
    );

    Chart.register(...registerables);
    // new bar chart
    let myChart = new Chart('myChart', {
      type: 'bar',
      //labels for data, in real version these would be the voting options
      data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: '# of Votes',
            //data and their representing colors, in real version
            //these would be the results of the vote + the colors given in voting phase
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

    console.log('Tässä on id: ' + this.id);
  }
}
