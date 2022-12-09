import { Component, OnInit } from '@angular/core';
import { WebsockethandlerService } from '../AWSapi.service';
import { Subscription } from 'rxjs';
import { InviteComponent } from '../invite/invite.component';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(
    private AWS: WebsockethandlerService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.AWS.bindFunction(this.getRoomData.bind(this));

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

  random() {
    let arr: any = [];
    for (
      let i = this.votes;
      i < this.AWS.messageFromServer.Item.votelimit;
      i++
    ) {
      let idx = Math.floor(
        Math.random() * this.AWS.messageFromServer.Item.choices.length
      );

      while (arr.includes(idx)) {
        idx = Math.floor(
          Math.random() * this.AWS.messageFromServer.Item.choices.length
        );
      }

      if (!arr.includes(idx)) {
        this.sendVote(idx, this.AWS.messageFromServer.Item.roomId);
        arr.push(idx);
        console.log(arr);
      }
    }
  }

  onOpenDialogClick() {
    this.matDialog.open(InviteComponent);
  }

  //this function is called when the socket receives a message and checks if
  //the current data in the messageFromServer data is valid and replaces it if it is not valid.
  getRoomData() {
    if (
      this.messageFromServer.Item === undefined ||
      this.messageFromServer.Item.roomId != sessionStorage.getItem('roomId')
    ) {
      this.ngOnInit();
    }
  }
}
