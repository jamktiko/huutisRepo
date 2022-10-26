import { Component, OnInit } from '@angular/core';
import { WebsockethandlerService } from '../AWSapi.service';
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
  status!: any;

  messageFromServer!: any;
  wsSubscription!: Subscription;

  constructor(
    // private webSocketService: WebsocketService,
    private AWS: WebsockethandlerService
  ) {}

  // initSocket = async (): Promise<any> => {
  //   try {
  //     this.wsSubscription = this.AWS.createObservableSocket().subscribe(
  //       (data) => (this.messageFromServer = JSON.parse(data)),
  //       (err) => console.log('err'),
  //       () => console.log('The observable stream is complete')
  //     );
  //   } catch (error) {
  //     if (error) {
  //       console.error(error);
  //     }
  //   }
  // };

  ngOnInit(): void {
    // this.initSocket();

    // setTimeout(() => {
    //   if (this.AWS.ws.readyState === 1) {
    //     this.fetchFromServer();
    //     console.log(this.AWS.ws.readyState);
    //   }
    // }, 500);

    console.log(this.AWS.messageFromServer);

    this.messageFromServer = this.AWS.messageFromServer;
  }

  closeSocket() {
    this.wsSubscription.unsubscribe();
    this.status = 'The socket is closed';
  }

  sendVote(index: any, id: any) {
    const msg: {
      roomId: string;
      action: string;
      choice: string;
    } = {
      action: 'incrementChoiceVotes',
      roomId: id,
      choice: JSON.stringify(index),
    };
    this.status = this.AWS.sendMessage(JSON.stringify(msg));
    console.log(JSON.stringify(msg));
  }

  // random() {
  //   this.vastausvaihtoehdot[
  //     Math.floor(Math.random() * this.vastausvaihtoehdot.length)
  //   ];
  // }

  // vote(data: any) {
  //   this.idx = data;
  //   console.log(this.idx);
  // }
}
