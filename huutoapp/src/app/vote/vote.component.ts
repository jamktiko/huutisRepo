import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy() {}

  idx = '';

  public vastausvaihtoehdot = [
    {
      vastausvaihtoehto: '1',
    },
    {
      vastausvaihtoehto: '2',
    },
    {
      vastausvaihtoehto: '3',
    },
    {
      vastausvaihtoehto: '4',
    },
    {
      vastausvaihtoehto: '5',
    },
    {
      vastausvaihtoehto: '6',
    },
  ];

  // function that selects random choice to vote when user presses the "choose for me" button -S
  random() {
    this.vastausvaihtoehdot[
      Math.floor(Math.random() * this.vastausvaihtoehdot.length)
    ];
  }

  vote(data: any) {
    this.idx = data;
    console.log(this.idx);
  }
}
