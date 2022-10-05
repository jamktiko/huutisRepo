import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from './environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  socket: any;

  private identificationSource = new BehaviorSubject(1234);
  currentIdentification = this.identificationSource.asObservable();

  private dataSource = new BehaviorSubject({});
  currentData = this.dataSource.asObservable();
  constructor() {}

  public currentID!: Number;

  forwardID(id: number) {
    this.currentID = id;
  }

  updateIdentification(id: number) {
    this.identificationSource.next(id);
  }

  updateData(data: any) {
    this.dataSource.next(data);
    console.log('Tässä on tämän hetkinen data muuttuja: ' + data);
  }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);

    this.socket.emit('sendData', 'Hello there from Angular');
  }

  sendData(data: any) {
    this.socket.emit('msg', data);
    this.currentID = data.id;
  }

  sendVote(id: any, choice: any) {
    this.socket.emit('vote', id, choice);
  }

  fetchData(id: number) {
    this.socket.emit('fetch', id);

    this.socket.on('data', (data: any) => {
      this.updateData(data);
      return data;
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
