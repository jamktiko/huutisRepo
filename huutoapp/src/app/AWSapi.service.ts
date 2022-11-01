import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environment';
import { Subscription } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsockethandlerService {
  ws!: WebSocket;
  socketIsOpen = 1;

  wsSubscription!: Subscription;
  messageFromServer!: any;
  status: any;

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
      this.ws.onmessage = (event) => observer.next(event.data);

      this.ws.onerror = (event) => observer.error(event);

      this.ws.onclose = (event) => observer.complete();

      return () => this.ws.close(1000, 'The user disconnected');
    });
  }

  initSocket() {
    this.wsSubscription = this.createObservableSocket().subscribe(
      (data) => (this.messageFromServer = JSON.parse(data)),
      (err) => console.log('err'),
      () => console.log('The observable stream is complete')
    );
  }
  catch(error: any) {
    if (error) {
      console.error(error);
    }
  }

  updateIdentification(id: number) {
    this.identificationSource.next(id);
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

  sendMessageToServer(roomId: any, question: any, format: any, choices: any) {
    const msg: {
      action: string;
      Id: string;
      Question: string;
      Format: string;
      Choices: any;
    } = {
      action: 'sendRoomInfo',
      Id: roomId,
      Question: question,
      Format: format,
      Choices: choices,
    };
    this.status = this.sendMessage(JSON.stringify(msg));
  }
}
