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
  currentRoomId!: number;
  subscription!: Subscription;

  data!: any;
  subscriptionData!: Subscription;
  labels: any = [];

  messageSubscription!: Subscription;
  messageFromServer!: any;

  status!: any;

  constructor(private AWS: WebsockethandlerService) {}

  chartData = this.AWS.messageFromServer.Item.choices;

  chartChoices: string[] = [];
  chartVotes: string[] = [];

  ngOnInit(): void {
    for (let item of this.AWS.messageFromServer.Item.choices) {
      this.chartChoices.push(item.vaihtoehto);
      this.chartVotes.push(item.votes);
    }

    Chart.register(...registerables);
    // new bar chart
    let myChart = new Chart('myChart', {
      type: 'bar',
      //labels for data, in real version these would be the voting options
      data: {
        labels: this.chartChoices,
        datasets: [
          {
            label: '# of Votes',
            //data and their representing colors, in real version
            //these would be the results of the vote + the colors given in voting phase
            data: this.chartVotes,
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

    console.log('Tässä on id: ' + this.currentRoomId);

    this.fetchFromServer();

    this.AWS.ws.addEventListener('message', (event) => {
      this.messageFromServer = event.data;
    });
  }

  fetchFromServer() {
    const msg: {
      action: string;
      data: string;
    } = {
      action: 'sendData',
      data: '1207',
    };
    this.status = this.AWS.sendMessage(JSON.stringify(msg));
    console.log(JSON.stringify(msg));
  }
}
