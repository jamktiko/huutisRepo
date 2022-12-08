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

  namearr = [
    {
      vaihtoehto: 'Pizza',
      names: ['Aaran', 'Aaren'],
    },
    {
      vaihtoehto: 'Pasta',
      names: ['Eero', 'Eemeli', 'Erkki'],
    },
    {
      vaihtoehto: 'Burgir',
      names: ['Vellamo', 'Veikko', 'Viljo', 'Vilho'],
    },
    {
      vaihtoehto: 'Chicken',
      names: ['Tero'],
    },
    {
      vaihtoehto: 'Soy',
      names: ['Taneli', 'Ossi', 'Masa'],
    },
  ];

  chartChoices = ['Pizza', 'Pasta', 'Burgir', 'Chicken', 'Soy'];
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
    this.assignColor();
    Chart.register(...registerables);
    // new bar chart -S
    let myChart = new Chart('myChart', {
      type: 'doughnut',
      //labels for data, in real version these would be the voting options -S
      data: {
        labels: this.chartChoices,
        datasets: [
          {
            label: '# of Votes',
            //data and their representing colors, in real version these would be the results of the vote -S
            data: [2, 3, 4, 1, 3],
            backgroundColor: this.bgColor,
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

  updateChart() {
    // lisätään uusi data chartData -taulukkoon

    this.chartVotes.splice(0, this.chartVotes.length);
    this.chartChoices.splice(0, this.chartChoices.length);

    for (let item of this.AWS.messageFromServer.Item.choices) {
      this.chartChoices.push(item.vaihtoehto);
      this.chartVotes.push(item.votes);
    }

    this.messageFromServer = this.AWS.messageFromServer;
    // päivitetään chart
    this.chart.update();
  }
}
