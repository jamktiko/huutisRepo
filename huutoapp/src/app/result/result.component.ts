import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { registerables } from 'chart.js';
import { WebsocketService } from '../websocket.service';
import { Subscription } from 'rxjs';

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

  constructor(private websocketservice: WebsocketService) {}

  ngOnInit(): void {
    this.websocketservice.setupSocketConnection();
    this.subscription = this.websocketservice.currentIdentification.subscribe(
      (idn) => (this.id = idn)
    );

    this.subscriptionData = this.websocketservice.currentData.subscribe(
      //@ts-ignore
      (data) => (this.data = data[0])
    );

    //iterate thorugh the possible choices and store them in the
    //this.labels array and display them in the graph.
    for (let item of this.data.choices) {
      this.labels.push(item.vaihtoehto);
    }

    this.websocketservice.fetchData(this.id);

    Chart.register(...registerables);
    let myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
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
