import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  constructor(private webSocketService: WebsocketService) {}

  ngOnInit(): void {
    this.webSocketService.setupSocketConnection();
  }

  ngOnDestroy() {
    this.webSocketService.disconnect();
  }
}
