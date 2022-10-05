import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent implements OnInit {
  id!: number;
  subscription!: Subscription;

  data!: any;
  itData!: any;
  subscriptionData!: Subscription;
  dataObj!: any;
  constructor(private webSocketService: WebsocketService) {}

  ngOnInit(): void {
    this.webSocketService.setupSocketConnection();

    //get the id that was used in the creation component. The id will be
    //used in fetching the data to the voting component with webSocketService
    //fetchData(this.id) method
    this.subscription = this.webSocketService.currentIdentification.subscribe(
      (idn) => (this.id = idn)
    );

    this.subscriptionData = this.webSocketService.currentData.subscribe(
      //@ts-ignore
      (data) => (this.data = data[0])
    );

    this.webSocketService.fetchData(this.id);

    console.log(this.data);

    console.log(this.data);
  }

  ngOnDestroy() {
    this.webSocketService.disconnect();
  }

  idx = '';

  sendVote(id: any, choice: any) {
    this.webSocketService.sendVote(id, choice);
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

  random() {
    this.vastausvaihtoehdot[
      Math.floor(Math.random() * this.vastausvaihtoehdot.length)
    ];
  }

  vote(data: any) {
    this.idx = data;
    console.log(this.idx);
  }
}
