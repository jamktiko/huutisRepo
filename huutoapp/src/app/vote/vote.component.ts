import { Component, OnInit } from '@angular/core';
import { InviteComponent } from '../invite/invite.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  ngOnDestroy() {}

  idx = '';

  onOpenDialogClick() {
    this.matDialog.open(InviteComponent);
  }

  public vastausvaihtoehdot = [
    {
      vastausvaihtoehto: 'Pizza',
    },
    {
      vastausvaihtoehto: 'Pasta',
    },
    {
      vastausvaihtoehto: 'Burgir',
    },
    {
      vastausvaihtoehto: 'Chicken',
    },
    {
      vastausvaihtoehto: 'Soy',
    },
    {
      vastausvaihtoehto: 'Paper',
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
