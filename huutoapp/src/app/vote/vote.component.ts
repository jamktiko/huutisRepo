import { Component, OnInit } from '@angular/core';
import { WebsockethandlerService } from '../AWSapi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent implements OnInit {
  id!: number;

  status!: any;

  messageFromServer!: any;
  wsSubscription!: Subscription;

  currrentNameSubscr!: Subscription;
  currentName!: any;

  constructor(private AWS: WebsockethandlerService) {}

  ngOnInit(): void {
    console.log(this.AWS.messageFromServer);

    this.messageFromServer = this.AWS.messageFromServer;

    this.currrentNameSubscr = this.AWS.currentName.subscribe(
      (name) => (this.currentName = name)
    );
  }

  closeSocket() {
    this.wsSubscription.unsubscribe();
    this.status = 'The socket is closed';
  }

  sendVote(index: any, id: any) {
    const msg: {
      roomId: string;
      action: string;
      choice: string;
      name: string;
    } = {
      action: 'incrementChoiceVotes',
      roomId: id,
      choice: JSON.stringify(index),
      name: this.currentName,
    };
    this.status = this.AWS.sendMessage(JSON.stringify(msg));
    console.log(JSON.stringify(msg));
  }

  // random() {
  //   this.vastausvaihtoehdot[
  //     Math.floor(Math.random() * this.vastausvaihtoehdot.length)
  //   ];
  // }

  // vote(data: any) {
  //   this.idx = data;
  //   console.log(this.idx);
  // }
}
