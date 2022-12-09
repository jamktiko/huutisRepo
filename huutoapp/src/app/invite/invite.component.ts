import { Component, OnInit } from '@angular/core';
import { WebsockethandlerService } from '../AWSapi.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css'],
})
export class InviteComponent implements OnInit {
  inviteLink!: string;

  constructor(private AWS: WebsockethandlerService) {}

  ngOnInit(): void {
    const roomCode = this.AWS.messageFromServer.Item.roomId;
    this.inviteLink = 'votea.net/app/#/etusivu?code=' + roomCode;
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.inviteLink);
  }
}
