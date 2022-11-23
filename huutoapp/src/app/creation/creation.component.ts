import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsockethandlerService } from '../AWSapi.service';
import { Subscription } from 'rxjs';
import { getMatIconNoHttpProviderError } from '@angular/material/icon';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css'],
  animations: [
    // trigger binded to the svg element -S
    trigger('openClose', [
      // if the state if open, rotate the element 90 degrees -S
      state('open', style({ transform: 'rotate(90deg)' })),
      transition('closed => open', [animate('0.01s')]),
      transition('open => closed', [animate('0.01s')]),
    ]),
  ],
})
export class CreationComponent implements OnInit {
  idn!: number;
  subscription!: Subscription;
  messageFromServer!: any;
  wsSubscription!: Subscription;
  nameSubscription!: Subscription;
  name!: string;
  status: any;
  anonymousVal: boolean = false;
  sliderValue: number = 0;

  constructor(private AWS: WebsockethandlerService) {}

  //when page is loaded a connection to the websocket is started
  //with setupSocketConnection() method. We also generate an id that goes along
  //with other information to the database
  ngOnInit() {
    this.genId();

    this.AWS.bindFunction(this.validateRoomCode.bind(this));

    this.subscription = this.AWS.currentIdentification.subscribe(
      (id) => (this.idn = id)
    );
  }

  //sendMessageToServer is called when the user clicks the create room button after which
  //the data for the room is sent to DynamoDB using the 'sendRoomInfo' route.
  //the sendMessageToServer can be used to invoke any routes by changing the action variable of
  //the message payload.

  sendMessageToServer() {
    this.AWS.sendMessageToServer(
      this.id.toString(),
      this.kysymys,
      this.format,
      this.vaihtoehdot,
      this.anonymousVal,
      this.sliderValue
    );

    setTimeout(() => {
      this.AWS.fetchFromServer(this.id.toString());
    }, 2000);
  }

  //when a user is changing format based on the 3 current options
  //this method changes the value of the format variable
  changeChoice(e: any) {
    this.format = e.target.value;
    console.log(this.format);
  }

  onInputChange(event: any) {
    this.sliderValue = event.value;
  }

  //variables where the information is stored for sending the data
  //to the server, which has methods to save the information to a database

  public vaihtoehdot = [
    {
      vaihtoehto: '',
      votes: 0,
      names: [],
    },
  ];

  id!: number;

  public kysymys = '';

  public format = '';

  //method for generating an id. This method is called when the creation component
  //is initialized
  genId() {
    this.id = Math.floor(1000 + Math.random() * 9000);
    console.log(this.id);
    this.AWS.fetchFromServer(this.id);
  }

  validateRoomCode() {
    if ('Item' in this.AWS.messageFromServer) {
      console.log('Huone löytyi');
      this.genId();
    } else {
      this.AWS.updateRoomId(this.id);
      this.AWS.bindFunction(() => null);
    }
  }

  //when a user adds an option the current ones get pushed into "vaihtoehdot" array in an object
  addForm() {
    this.vaihtoehdot.push({
      vaihtoehto: '',
      votes: 0,
      names: [],
    });

    console.log(this.vaihtoehdot);
    console.log(this.kysymys);
  }

  // added method to remove choices in cretion phase, in case of an misclick -S
  removeForm() {
    if (this.vaihtoehdot.length > 1) {
      this.vaihtoehdot.pop();
    }
  }

  // toDisplay is boolean that changes when toggleDisplay is activated by onclick in the creation component
  // based on its value the ngIf shows more room settings -S
  toDisplay = false;

  toggleDisplay() {
    this.toDisplay = !this.toDisplay;
  }
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
