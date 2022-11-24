import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { registerables } from 'chart.js';
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
  // boolean which changes based on if the "more results" is clicked in the ui -S
  toDisplay = false;

  // function that changes boolean above -S
  toggleDisplay() {
    this.toDisplay = !this.toDisplay;
  }

  // same boolean and function than above just for the animation on the arrow icon -S
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() {}

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
  ];

  ngOnInit(): void {
    Chart.register(...registerables);
    // new bar chart -S
    let myChart = new Chart('myChart', {
      type: 'doughnut',
      //labels for data, in real version these would be the voting options -S
      data: {
        labels: ['Pizza', 'Pasta', 'Burgir'],
        datasets: [
          {
            label: '# of Votes',
            //data and their representing colors, in real version these would be the results of the vote -S
            data: [2, 3, 4],
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
      },
    });
  }
}
