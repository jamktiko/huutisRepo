import { Component, OnInit, OnDestroy } from '@angular/core';
import Chart from 'chart.js/auto';
import { Subscription, withLatestFrom } from 'rxjs';
import { WebsockethandlerService } from '../AWSapi.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AUTO_STYLE,
} from '@angular/animations';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  animations: [
    // trigger binded to the svg element -S
    trigger('openClose', [
      // if the state if open, rotate the element 90 degrees -S
      state('open', style({ transform: 'rotate(90deg)' })),
      transition('closed => open', [animate('0.01s')]),
      transition('open => closed', [animate('0.01s')]),
    ]),
  ],
})
export class ResultComponent implements OnInit {
  //Ids that are used to get the correct rooms information
  currentRoomId!: number;
  subscription!: Subscription;

  subscriptionData!: Subscription;
  labels: string[] = [];

  messageSubscription!: Subscription;
  //messageFromServer contains the data that comes from websocket messages events
  messageFromServer!: any;

  chart!: any;

  toDisplay = false;

  chartType: any = 'doughnut';

  // function that changes boolean above -S
  toggleDisplay() {
    this.toDisplay = !this.toDisplay;
  }

  // same boolean and function than above just for the animation on the arrow icon -S
  isOpen = true;

  toggle() {
    this.messageFromServer = this.AWS.messageFromServer;
    this.isOpen = !this.isOpen;
  }

  constructor(private AWS: WebsockethandlerService) {}

  //arrays where the votes and the choices are saved that they can be
  //displayed in the chart
  chartChoices: string[] = [];
  chartVotes: string[] = [];

  fontTheme!: string;

  font!: any;

  //variable that is toggled on and off depending on which
  //chart is displayed
  chartScales = false;

  ngOnInit(): void {
    //variable that blocks the user from
    //voting again if they go to the voting view
    sessionStorage.setItem('hasVoted', '1');

    //If the messageFromServer is undefined, it will be fetched contents
    //from sessionStorage
    if (!this.AWS.messageFromServer) {
      this.AWS.messageFromServer = JSON.parse(
        sessionStorage.getItem('roomData') || '{}'
      );
    }

    //function that is binded to the WebSocketservice and everytime
    //it receives a message or in this case a vote it will invoke the binded
    //function and update the chart
    this.AWS.bindFunction(this.updateChart.bind(this));

    this.messageFromServer = this.AWS.messageFromServer;

    //initial push of the labels and votes for the chart
    for (let item of this.AWS.messageFromServer.Item.choices) {
      this.chartChoices.push(item.vaihtoehto);
      this.chartVotes.push(item.votes);
    }

    //fontTheme of the chart depending on which mode the user has chosen
    this.fontTheme =
      (localStorage.getItem('theme') as string) == 'dark' ? 'white' : 'black';

    // Chart.register(...registerables);
    this.chart = new Chart('myChart', {
      type: 'doughnut',
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
              'rgba(54,162,235,255)',

              'rgba(255,99,132,255)',

              'rgba(75,192,192,255)',

              'rgba(255,159,64,255)',

              'rgba(153,102,255,255)',

              'rgba(201,203,207,255)',
            ],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: this.fontTheme,
            },
          },
        },
        scales: {},
        responsive: true,
      },
    });
  }

  //function to change the chart type between doughnut and bar chart
  changeChartType() {
    if (this.chartType == 'bar') {
      this.chartScales = false;
      this.chartType = 'doughnut';
    } else if (this.chartType == 'doughnut') {
      this.chartScales = true;
      this.chartType = 'bar';
    }

    this.chart.destroy();

    this.chart = new Chart('myChart', {
      type: this.chartType,
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
              'rgba(54,162,235,255)',

              'rgba(255,99,132,255)',

              'rgba(75,192,192,255)',

              'rgba(255,159,64,255)',

              'rgba(153,102,255,255)',

              'rgba(201,203,207,255)',
            ],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: this.fontTheme,
            },
          },
        },
        scales: {
          x: {
            display: this.chartScales,
            ticks: {
              color: this.fontTheme,
            },
          },
          y: {
            display: this.chartScales,
            ticks: {
              color: this.fontTheme,
            },
          },
        },
        responsive: true,
      },
    });
  }

  //when the socket receives new votes this methods increments the
  //right values in the chartVotes chart and updateds it
  updateChart() {
    for (let i = 0; i < this.AWS.messageFromServer.Item.choices.length; i++) {
      if (
        this.AWS.messageFromServer.Item.choices[i].votes ==
        this.chartVotes[i] + 1
      ) {
        this.chartVotes[i] += 1;
      }
    }

    this.messageFromServer = this.AWS.messageFromServer;
    // päivitetään chart
    this.chart.update();
  }
}
