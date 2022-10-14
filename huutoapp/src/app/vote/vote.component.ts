import { Component, OnInit } from '@angular/core';
import { WebsockethandlerService } from '../AWSapi.service';
import { Subscription } from 'rxjs';
import { timingSafeEqual } from 'crypto';
import { resolve } from 'dns';
import { waitForAsync } from '@angular/core/testing';

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

  initSocket = async (): Promise<any> => {
    try {
      this.wsSubscription = this.AWS.createObservableSocket().subscribe(
        (data) => (this.messageFromServer = JSON.parse(data)),
        (err) => console.log('err'),
        () => console.log('The observable stream is complete')
      );
    } catch (error) {
      if (error) {
        console.error(error);
      }
    }
  };

  ngOnInit(): void {
    // this.webSocketService.setupSocketConnection();

    this.initSocket();
    //get the id that was used in the creation component. The id will be
    //used in fetching the data to the voting component with webSocketService
    //fetchData(this.id) method
    // this.subscription = this.webSocketService.currentIdentification.subscribe(
    //   (idn) => (this.id = idn)
    // );

    // this.subscriptionData = this.webSocketService.currentData.subscribe(
    //   //@ts-ignore
    //   (data) => (this.data = data[0])
    // );

    // this.webSocketService.fetchData(this.id);

    setTimeout(() => {
      if (this.AWS.ws.readyState === 1) {
        this.fetchFromServer();
        console.log(this.AWS.ws.readyState);
      }
    }, 500);
  }

  ngOnDestroy() {
    // this.webSocketService.disconnect();
    this.closeSocket();
  }

  closeSocket() {
    this.wsSubscription.unsubscribe();
    this.status = 'The socket is closed';
  }

  fetchFromServer() {
    const msg: {
      action: string;
      data: string;
    } = {
      action: 'sendData',
      data: '1207',
    };
    this.status = this.AWS.sendMessage(JSON.stringify(msg));
    console.log(JSON.stringify(msg));
  }

  idx = '';

  sendVote(vaihtoehto: any) {
    const msg: {
      action: string;
      data: string;
    } = {
      action: 'incrementChoiceVotes',
      data: '1207',
    };
    this.status = this.AWS.sendMessage(JSON.stringify(msg));
    console.log(JSON.stringify(msg));
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
