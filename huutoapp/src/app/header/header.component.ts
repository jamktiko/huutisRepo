import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
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

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
    if (localStorage.getItem('theme') == 'dark') {
      document.documentElement.classList.add('dark');
    }
  }

  //when how to use is clicked in menu, it invokes this function which in turn shows the DialogComponent as a dialog -S
  onOpenDialogClick() {
    this.matDialog.open(DialogComponent);
  }

  themeSwitch() {
    if (localStorage.getItem('theme') == 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
