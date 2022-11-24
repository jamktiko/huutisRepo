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

  voteLimit!: number;
  votes: number = 0;

  constructor(private AWS: WebsockethandlerService) {}

  ngOnInit(): void {
    console.log(this.AWS.wsSubscription);
    if (!this.AWS.messageFromServer) {
      this.AWS.messageFromServer = JSON.parse(
        sessionStorage.getItem('roomData') || '{}'
      );
    }

    if (this.AWS.wsSubscription === undefined) {
      this.AWS.initSocket();
      this.AWS.hasReconnected = true;
    }

    this.messageFromServer = this.AWS.messageFromServer;

    this.voteLimit = this.AWS.messageFromServer.Item.votelimit;
    this.currrentNameSubscr = this.AWS.currentName.subscribe(
      (name) => (this.currentName = name)
    );
  }

  disableButton(event: any) {
    event.target.disabled = true;
  }

  sendVote(index: any, id: any) {
    if (sessionStorage.getItem('hasVoted') !== '1') {
      this.votes += 1;
      console.log(this.votes);
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
      if (this.AWS.messageFromServer.Item.votelimit == this.votes) {
        if (this.AWS.hasReconnected) {
          this.AWS.saveConnection(
            JSON.parse(sessionStorage.getItem('roomData') || '{}').Item.roomId
          );
        }
      }
    }
  }

  checkReconnect() {
    if (this.AWS.hasReconnected) {
      this.AWS.saveConnection(
        JSON.parse(sessionStorage.getItem('roomData') || '{}').Item.roomId
      );
    }
  }

  // random() {
  //   this.vastausvaihtoehdot[
  //     Math.floor(Math.random() * this.vastausvaihtoehdot.length)
  //   ];
  // }
}
