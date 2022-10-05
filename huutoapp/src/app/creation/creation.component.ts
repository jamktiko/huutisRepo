import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';
import { Room } from '../models/Room';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css'],
})
export class CreationComponent implements OnInit {
  idn!: number;
  subscription!: Subscription;
  constructor(private webSocketService: WebsocketService) {}

  //when page is loaded a connection to the websocket is started
  //with setupSocketConnection() method. We also generate an id that goes along
  //with other information to the database
  ngOnInit() {
    this.webSocketService.setupSocketConnection();
    this.genId();

    this.subscription = this.webSocketService.currentIdentification.subscribe(
      (id) => (this.idn = id)
    );
  }

  //when a user is changing format based on the 3 current options
  //this method changes the value of the format variable
  changeChoice(e: any) {
    this.format = e.target.value;
    console.log(this.format);
  }

  //variables where the information is stored for sending the data
  //to the server, which has methods to save the information to a database

  public vaihtoehdot = [
    {
      vaihtoehto: '',
      votes: 0,
    },
  ];

  id!: number;

  public kysymys = '';

  public format = '';

  changeIdentification(id: number) {
    this.webSocketService.updateIdentification(id);
  }

  //method for generating an id. This method is called when the creation component
  //is initialized
  genId() {
    this.id = Math.floor(1000 + Math.random() * 9000);
    console.log(this.id);
  }

  //when a user adds an option the current ones get pushed into "vaihtoehdot" array in an object
  addForm() {
    this.vaihtoehdot.push({
      vaihtoehto: '',
      votes: 0,
    });

    console.log(this.vaihtoehdot);
    console.log(this.kysymys);
  }

  //when the user clicks the create room button the data in the variables is sent to the server
  //using a method from webSocketService called sendData() where the data is passed in as a variable
  submit() {
    let data: Room = {
      id: this.id,
      kysymys: this.kysymys,
      format: this.format,
      choices: this.vaihtoehdot,
    };
    console.log(data);
    this.webSocketService.sendData(data);
    this.changeIdentification(this.id);
  }
}
