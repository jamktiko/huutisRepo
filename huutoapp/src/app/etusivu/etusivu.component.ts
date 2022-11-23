import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsockethandlerService } from '../AWSapi.service';
import { Subscription } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-etusivu',
  templateUrl: './etusivu.component.html',
  styleUrls: ['./etusivu.component.css'],
})
export class EtusivuComponent implements OnInit {
  messageFromServer!: any;
  wsSubscription!: Subscription;
  anonymous!: any;
  constructor(private AWS: WebsockethandlerService) {}

  ngOnInit(): void {
    this.AWS.initSocket();

    this.AWS.bindFunction(this.validateRoomCode2.bind(this));
  }
  isDisabled = true;
  public input1 = '';

  public roomId = this.input1;

  validateRoomCode1() {
    if (this.input1.length == 4) {
      console.log('validation toimii');
      this.AWS.fetchFromServer(this.input1.toString());
    } else {
      this.isDisabled = true;
    }
  }

  validateRoomCode2() {
    if ('Item' in this.AWS.messageFromServer) {
      console.log('huoneen validation toimii');
      this.isDisabled = false;
      this.anonymous = this.AWS.messageFromServer.Item.anonymous;
      this.roomId = this.input1;
    } else {
      this.isDisabled = true;
    }
  }

  fetchRoom() {
    console.log(this.roomId);

    this.AWS.updateRoomId(this.input1);

    this.AWS.saveConnection(this.input1);
  }

  onDigitInput(event: any) {
    let element;
    if (event.code !== 'Backspace')
      element = event.srcElement.nextElementSibling;

    if (event.code === 'Backspace')
      element = event.srcElement.previousElementSibling;

    if (element == null) return;
    else element.focus();
  }
}
