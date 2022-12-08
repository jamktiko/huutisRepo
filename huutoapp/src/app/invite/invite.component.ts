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
    this.inviteLink = 'localhost:4200/#/etusivu?code=' + '0001';
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.inviteLink);
    alert('Invite link copied to clipboard');
  }
}
