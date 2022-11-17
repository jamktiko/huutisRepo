import { Component, OnInit, OnDestroy } from '@angular/core';
import Chart from 'chart.js/auto';
import { Subscription } from 'rxjs';
import { WebsockethandlerService } from '../AWSapi.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit, OnDestroy {
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
    this.AWS.bindFunction(this.updateChart.bind(this));

    //on initing the result component

    this.messageFromServer = this.AWS.messageFromServer;

    for (let item of this.AWS.messageFromServer.Item.choices) {
      this.chartChoices.push(item.vaihtoehto);
      this.chartVotes.push(item.votes);
    }

    //bind the updateChart method to a function parameter in the service
    //and when its called the function is called and the chart is updated

    // chart that displays the results of the vote in the HTML canvas component

    // Chart.register(...registerables);
    this.chart = new Chart('myChart', {
      type: 'bar',
      //labels for data, in real version these would be the voting options -S
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

    this.fetchDataForAll(this.AWS.messageFromServer.Item.roomId);
  }

  ngOnDestroy(): void {
    this.AWS.closeSocket();
    console.log('Socketti suljettu');
  }

  updateChart() {
    // lisätään uusi data chartData -taulukkoon

    this.chartVotes.splice(0, this.chartVotes.length);
    this.chartChoices.splice(0, this.chartChoices.length);

    for (let item of this.AWS.messageFromServer.Item.choices) {
      this.chartChoices.push(item.vaihtoehto);
      this.chartVotes.push(item.votes);
    }

    this.AWS.messageFromServer = this.messageFromServer;
    // päivitetään chart
    this.chart.update();
  }

  fetchDataForAll(id: any) {
    const msg: {
      roomId: string;
      action: string;
    } = {
      action: 'fetchDataForAll',
      roomId: id,
    };
    console.log(JSON.stringify(msg));
    this.status = this.AWS.sendMessage(JSON.stringify(msg));
  }
}
