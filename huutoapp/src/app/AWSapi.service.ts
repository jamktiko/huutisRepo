import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environment';
import { Subscription } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { ResultComponent } from './result/result.component';

@Injectable({
  providedIn: 'root',
})
export class WebsockethandlerService {
  ws!: WebSocket;
  socketIsOpen = 1;
  private myFunc!: () => void;

  wsSubscription!: Subscription;
  messageFromServer!: any;
  status: any;

  hasVoted: boolean = false;

  chartVotes: string[] = [];

  constructor() {}

  private identificationSource = new BehaviorSubject(1234);
  currentIdentification = this.identificationSource.asObservable();

  private roomIdSource = new BehaviorSubject(1234);
  currentRoomId = this.roomIdSource.asObservable();

  private nameSource = new BehaviorSubject(1234);
  currentName = this.nameSource.asObservable();

  createObservableSocket(): Observable<any> {
    this.ws = new WebSocket(environment.API_ENDPOINT);

    console.log(this.ws.readyState);

    return new Observable((observer) => {
      this.ws.onmessage = function (event) {
        observer.next(event.data);
        console.log(event.data);
      };

      this.ws.onerror = (event) => observer.error(event);

      this.ws.onclose = (event) => observer.complete();

      return () => this.ws.close(1000, 'The user disconnected');
    });
  }

  initSocket() {
    this.wsSubscription = this.createObservableSocket().subscribe(
      (data) => ((this.messageFromServer = JSON.parse(data)), this.myFunc()),
      (err) => console.log('err')
    );
  }

  bindFunction(fn: () => void) {
    this.myFunc = fn;
  }

  closeSocket() {
    this.ws.close();
  }

  updateRoomId(id: any) {
    this.roomIdSource.next(id);
  }

  updateName(name: any) {
    this.nameSource.next(name);
  }

  sendMessage(message: any) {
    console.log(this.ws.readyState);
    if (this.ws.readyState === this.socketIsOpen) {
      this.ws.send(message);
      console.log(`Sent to server ${message}`);
    } else {
      console.log('Message was not sent - the socket is closed');
    }
  }

  //this method is called when the user presses the join button on the frontpage
  //and after that the connection is saved to the connection table in the specific
  //rooms "connections" array
  saveConnection(roomId: any) {
    const msg: {
      action: string;
      roomId: string;
    } = {
      action: 'RoomSaveConnection',
      roomId: roomId.toString(),
    };
    this.status = this.sendMessage(JSON.stringify(msg));
  }

  //when a user join the voting component this method is called before to show the correct
  //information by using the roomId that the user specified or that the creation component
  //created.
  fetchFromServer(roomId: any) {
    const msg: {
      action: string;
      data: string;
    } = {
      action: 'fetchRoomData',
      data: roomId.toString(),
    };
    this.status = this.sendMessage(JSON.stringify(msg));
  }

  //this method is used when creating the room and sending all the info
  sendMessageToServer(
    roomId: any,
    question: any,
    format: any,
    choices: any,
    anonymous: any,
    votelimit: any
  ) {
    const msg: {
      action: string;
      Id: string;
      Question: string;
      Format: string;
      Choices: any;
      Anonymous: any;
      Votelimit: any;
    } = {
      action: 'sendRoomInfo',
      Id: roomId,
      Question: question,
      Format: format,
      Choices: choices,
      Anonymous: anonymous,
      Votelimit: votelimit,
    };
    this.status = this.sendMessage(JSON.stringify(msg));
  }
}
