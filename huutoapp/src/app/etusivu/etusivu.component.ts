import { Component, OnInit } from '@angular/core';
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
  anonymous!: boolean;
  prompt: boolean = false;
  constructor(private AWS: WebsockethandlerService) {}

  ngOnInit(): void {
    this.AWS.initSocket();

    //function that is binded to the WebSocket service. The function will be invoked
    //after the user enters a room code first the validateRoomCode1 will be invoked
    //and after that when the socket receives the room info it checks the validity.
    this.AWS.bindFunction(this.validateRoomCode2.bind(this));

    //Resetting the state variables of a browswer when in the landing page
    sessionStorage.setItem('hasVoted', '0');

    sessionStorage.setItem('roomId', '');

    sessionStorage.setItem('roomData', '');
  }
  isDisabled = true;
  public input1 = '';
  private invited = false;
  public roomId = this.input1;

  //when a user inputs 4 digits this method looks for a room with
  //the user inputted code and depending on the return value
  //enables the join button or tells the user the room doesn't exist
  validateRoomCode1() {
    if (this.input1.toString().length == 4) {
      this.AWS.fetchFromServer(this.input1.toString());
    } else {
      this.isDisabled = true;
    }
  }

  //checks if the message from the server is valid. If not
  //it will prompt the user that the room doesn't exist
  validateRoomCode2() {
    if ('Item' in this.AWS.messageFromServer) {
      sessionStorage.setItem(
        'roomData',
        JSON.stringify(this.AWS.messageFromServer)
      );
      this.isDisabled = false;
      this.prompt = false;
      this.anonymous = this.AWS.messageFromServer.Item.anonymous;
      this.roomId = this.input1;
    } else {
      this.isDisabled = true;
      this.prompt = true;
    }
  }

  fetchRoom() {
    if (this.invited) {
      this.AWS.fetchFromServer(this.input1.toString());
    }

    this.AWS.updateRoomId(this.input1);

    this.AWS.saveConnection(this.input1);
  }

  checkForStringQuery() {
    const url = window.location.href;

    const [hash, query] = url.split('#')[1].split('?');
    const urlparams = Object.fromEntries(new URLSearchParams(query));

    if ('code' in urlparams) {
      this.input1 = urlparams['code'];
      this.isDisabled = false;
      sessionStorage.setItem('roomId', this.input1.toString());
      this.invited = true;
    }
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
