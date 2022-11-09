import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent implements OnInit {
  constructor(private webSocketService: WebsocketService) {}

  ngOnInit(): void {
    this.webSocketService.setupSocketConnection();
  }

  ngOnDestroy() {
    this.webSocketService.disconnect();
  }

  idx = '';

  sendData(data: any) {
    this.webSocketService.sendData(data);
  }

  public vastausvaihtoehdot = [
    {
      vastausvaihtoehto: '1',
    },
    {
      vastausvaihtoehto: '2',
    },
    {
      vastausvaihtoehto: '3',
    },
    {
      vastausvaihtoehto: '4',
    },
    {
      vastausvaihtoehto: '5',
    },
    {
      vastausvaihtoehto: '6',
    },
  ];

  // function that selects random choice to vote when user presses the "choose for me" button -S
  random() {
    this.vastausvaihtoehdot[
      Math.floor(Math.random() * this.vastausvaihtoehdot.length)
    ];
  }

  vote(data: any) {
    this.idx = data;
    console.log(this.idx);
    this.sendData(this.idx);
  }
}
