import { Component, OnInit } from '@angular/core';
import { names } from './names';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = '';

  rndm(){
    let idx = Math.floor(Math.random() * (2738 - 1) + 1)
    this.name = names[idx]
  }




}
