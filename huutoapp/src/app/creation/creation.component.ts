import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WebsocketService } from '../websocket.service';
import { Room } from '../models/Room';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css'],
})
export class CreationComponent implements OnInit {
  constructor(private webSocketService: WebsocketService) {}

  ngOnInit() {
    this.webSocketService.setupSocketConnection();
  }

  changeGender(e: any) {
    this.format = e.target.value;
    console.log(this.format);
  }

  public vaihtoehdot = [
    {
      vaihtoehto: '',
    },
  ];

  public kysymys = '';

  public format = '';

  addForm() {
    this.vaihtoehdot.push({
      vaihtoehto: '',
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

  submit() {
    let data = {
      kysymys: this.kysymys,
      format: this.format,
      choices: this.vaihtoehdot,
    };
    console.log(data);
    this.webSocketService.sendData(data);
  }
}
