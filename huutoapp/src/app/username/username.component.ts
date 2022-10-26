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
  constructor(private AWS: WebsockethandlerService) {}

  ngOnInit(): void {
    this.currentRoomSubscr = this.AWS.currentRoomId.subscribe(
      (id) => (this.currentRoomId = id)
    );

    this.AWS.fetchFromServer(this.currentRoomId);
  }

  //name muuttujaan two way bindattu käyttjän syöttämä nimi, sekä mahdollinen
  //satunnainen nimi, jos käyttäjä sellaisen valitsee
  name = '';

  //funktio, joka valitsee satunnaisen nimen mikäli käyttäjä painaa nappia
  rndm() {
    let idx = Math.floor(Math.random() * (2738 - 1) + 1);
    this.name = names[idx];
  }
}
