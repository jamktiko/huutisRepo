import { Component, OnInit, OnDestroy } from '@angular/core';
import Chart from 'chart.js/auto';
import { Subscription } from 'rxjs';
import { WebsockethandlerService } from '../AWSapi.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
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

  data!: any;
  subscriptionData!: Subscription;
  labels: any = [];

  messageSubscription!: Subscription;
  //messageFromServer contains the data that comes from websocket messages events
  messageFromServer!: any;

  chart!: any;

  status!: any;

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

  bgColor: any = [];

  // assignColor creates random RGB values that it pushes to an array for the graph to use as background color -S
  assignColor() {
    for (let i = 0; i < this.chartChoices.length; i++) {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      this.bgColor.push('rgb(' + r + ', ' + g + ', ' + b + ')');
      console.log(this.bgColor);
    }
  }

  ngOnInit(): void {
    sessionStorage.setItem('hasVoted', '1');

    if (!this.AWS.messageFromServer) {
      this.AWS.messageFromServer = JSON.parse(
        sessionStorage.getItem('roomData') || '{}'
      );
    }

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
            backgroundColor: this.bgColor,
          },
        ],
      },
      options: {
        scales: {},
        responsive: true,
      },
    });
  }

  changeChartType() {
    if (this.chartType == 'bar') {
      this.chartType = 'doughnut';
    } else if (this.chartType == 'doughnut') {
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
              'rgba(143, 242, 218)',
              'rgba(16, 115, 91)',
              'rgba(106, 238, 206)',
              'rgba(21, 153, 121)',
              'rgba(68, 233, 194)',
              'rgba(26, 191, 152)',
              'rgba(31, 229, 182)',
            ],
          },
        ],
      },
      options: {
        scales: {},
        responsive: true,
        animation: false,
      },
    });
  }

  //when the socket receives new votes this methods increments the
  //right values in the chartVotes chart
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
