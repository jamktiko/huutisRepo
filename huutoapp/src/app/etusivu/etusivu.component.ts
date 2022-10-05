import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from '../websocket.service';
@Component({
  selector: 'app-etusivu',
  templateUrl: './etusivu.component.html',
  styleUrls: ['./etusivu.component.css'],
})
export class EtusivuComponent implements OnInit {
  constructor(private websocketservice: WebsocketService) {}

  ngOnInit(): void {
    // this.websocketservice.setupSocketConnection();
  }
}
