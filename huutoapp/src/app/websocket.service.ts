import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from './environment';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  socket: any;
  constructor() {}

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);

    this.socket.emit('my message', 'Hello there from Angular');

    this.socket.on('my broadcast', (data: string) => {
      console.log(data);
    });
  }

  sendData(data: any) {
    this.socket.emit('msg', data);
    // this.socket.emit('vote');
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
