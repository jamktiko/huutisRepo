import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environment';
import { io } from 'socket.io-client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsockethandlerService {
  ws!: WebSocket;
  socketIsOpen = 1;

  constructor() {}

  private identificationSource = new BehaviorSubject(1234);
  currentIdentification = this.identificationSource.asObservable();

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

  updateIdentification(id: number) {
    this.identificationSource.next(id);
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
}
