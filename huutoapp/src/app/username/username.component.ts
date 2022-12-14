import { Component, OnInit } from '@angular/core';
import { WebsockethandlerService } from '../AWSapi.service';
import { names } from './names';
import { Subscription } from 'rxjs';
import { InviteComponent } from '../invite/invite.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
})
export class UsernameComponent implements OnInit {
  currentRoomSubscr!: Subscription;
  currentRoomId!: string | number;

  constructor(
    private matDialog: MatDialog,
    private AWS: WebsockethandlerService
  ) {}

  //in this component the websocket connection is initialized
  //and the connection stays the same even when changing page in this SPA-application
  ngOnInit(): void {
    this.currentRoomSubscr = this.AWS.currentRoomId.subscribe(
      (id) => (this.currentRoomId = id)
    );

    //if the socket connection is fresh because of for example a refresh
    //the room info will be taken from sessionStorage
    if (!this.AWS.messageFromServer) {
      this.AWS.messageFromServer = JSON.parse(
        sessionStorage.getItem('roomData') || '{}'
      );
    }
  }

  onOpenDialogClick() {
    this.matDialog.open(InviteComponent);
  }

  public name = '';

  //the name is forwarded to the next component and there it is sent to the DB
  //along with the users vote and it is stored in an array
  forwardName() {
    this.AWS.updateName(this.name);
    sessionStorage.setItem('name', this.name);
  }

  //function that chooses a random name for the user if they press the "Random username" button
  rndm() {
    let idx = Math.floor(Math.random() * (2738 - 1) + 1);
    this.name = names[idx];
  }
}
