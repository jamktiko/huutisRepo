import { Component, OnInit } from '@angular/core';
import { WebsockethandlerService } from '../AWSapi.service';
import { names } from './names';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
})
export class UsernameComponent implements OnInit {
  currentRoomSubscr!: Subscription;
  currentRoomId!: any;
  data!:any;


  constructor(private AWS: WebsockethandlerService) {}

  //in this component the websocket connection is initialized
  //and the connection stays the same even when changing page in this SPA-application
  ngOnInit(): void {

    let data = JSON.parse(sessionStorage.getItem('roomData') || '{}');
    console.log(data.Item.roomId);

    this.currentRoomSubscr = this.AWS.currentRoomId.subscribe(
      (id) => (this.currentRoomId = id)
    );

    //console.log(this.currentRoomId);

    // this.AWS.fetchFromServer(this.currentRoomId);
  }

  public name = '';

  //the name is forwarded to the next component and there it is sent to the DB
  //along with the users vote and it is stored in an array
  forwardName() {
    this.AWS.updateName(this.name);
    console.log('Nimi forwardoitu');
  }

  //name muuttujaan two way bindattu käyttjän syöttämä nimi, sekä mahdollinen
  //satunnainen nimi, jos käyttäjä sellaisen valitsee

  //function that chooses a random name for the user if they press the "Random username" button
  rndm() {
    let idx = Math.floor(Math.random() * (2738 - 1) + 1);
    this.name = names[idx];
  }
}
