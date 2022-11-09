import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { registerables } from 'chart.js';
import { Subscription } from 'rxjs';
import { WebsockethandlerService } from '../AWSapi.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  //Ids that are used to get the correct rooms information
  currentRoomId!: number;
  subscription!: Subscription;

  data!: any;
  subscriptionData!: Subscription;
  labels: any = [];

  messageSubscription!: Subscription;
  //messageFromServer contains the data that comes from websocket messages events
  messageFromServer!: any;

  chart!: any;

  status!: any;

  constructor(private AWS: WebsockethandlerService) {}

  //arrays where the votes and the choices are saved that they can be
  //displayed in the chart
  chartChoices: string[] = [];
  chartVotes: string[] = [];

  ngOnInit(): void {
    //on initing the result component
    this.fetchFromServer();

    this.messageFromServer = this.AWS.messageFromServer;

    //bind the updateChart method to a function parameter in the service
    //and when its called the function is called and the chart is updated
    this.AWS.bindFunction(this.updateChart.bind(this));

    // chart that displays the results of the vote in the HTML canvas component

    // Chart.register(...registerables);
    this.chart = new Chart('myChart', {
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
        responsive: true,
      },
    });
  }

  updateChart() {
    // lisätään uusi data chartData -taulukkoon
    let length = this.chartVotes.length;

    this.chartVotes.splice(0, length);

    for (let item of this.AWS.messageFromServer.Item.choices) {
      this.chartVotes.push(item.votes);
    }
    // päivitetään chart
    this.chart.update();
  }

  fetchFromServer() {
    const msg: {
      action: string;
      data: string;
    } = {
      action: 'fetchRoomData',
      data: this.AWS.messageFromServer.Item.roomId,
    };
    this.status = this.AWS.sendMessage(JSON.stringify(msg));
    console.log(JSON.stringify(msg));

    this.chartChoices.splice(0, this.chartChoices.length);
    this.chartVotes.splice(0, this.chartVotes.length);

    for (let item of this.AWS.messageFromServer.Item.choices) {
      this.chartChoices.push(item.vaihtoehto);
      this.chartVotes.push(item.votes);
    }
  }
}
