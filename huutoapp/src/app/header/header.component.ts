import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // showRoomcode set to false by default, and then based on component its changed to true to show the roomcode in header -S
  @Input()
  public showRoomcode: boolean = false;

  @Input()
  roomCode!: string;

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  //when how to use is clicked in menu, it invokes this function which in turn shows the DialogComponent as a dialog -S
  onOpenDialogClick() {
    this.matDialog.open(DialogComponent);
  }
}
