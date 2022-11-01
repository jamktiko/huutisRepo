import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsockethandlerService } from '../AWSapi.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-etusivu',
  templateUrl: './etusivu.component.html',
  styleUrls: ['./etusivu.component.css'],
})
export class EtusivuComponent implements OnInit {
  messageFromServer!: any;
  wsSubscription!: Subscription;
  constructor(private AWS: WebsockethandlerService) {}

  ngOnInit(): void {
    this.AWS.initSocket();
  }

  public input1 = '';
  public input2 = '';
  public input3 = '';
  public input4 = '';

  public roomId = '';

  fetchRoom() {
    this.roomId = this.input1 + this.input2 + this.input3 + this.input4;
    console.log(this.roomId);

    this.AWS.updateRoomId(this.roomId);

    this.AWS.saveConnection(this.roomId);
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
