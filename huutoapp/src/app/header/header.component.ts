import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { WebsockethandlerService } from '../AWSapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // showRoomcode set to false by default, and then based on component its changed to true to show the roomcode in header -S
  @Input()
  public showRoomcode: boolean = false;

  public roomCode!: string | null;

  constructor(
    private matDialog: MatDialog,
    private AWS: WebsockethandlerService
  ) {}

  ngOnInit(): void {
    if (this.showRoomcode) {
      if (this.AWS.messageFromServer.Item == undefined) {
        this.roomCode = sessionStorage.getItem('roomId');
        return;
      } else {
        this.roomCode = this.AWS.messageFromServer.Item.roomId;
        sessionStorage.setItem(
          'roomId',
          this.AWS.messageFromServer.Item.roomId
        );
      }
    }
  }

  //when how to use is clicked in menu, it invokes this function which in turn shows the DialogComponent as a dialog -S
  onOpenDialogClick() {
    this.matDialog.open(DialogComponent);
  }

  themeSwitch() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      return;
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }
}
