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


  //name muuttujaan two way bindattu käyttjän syöttämä nimi, sekä mahdollinen
  //satunnainen nimi, jos käyttäjä sellaisen valitsee
  name = '';


  //funktio, joka valitsee satunnaisen nimen mikäli käyttäjä painaa nappia
  rndm(){
    let idx = Math.floor(Math.random() * (2738 - 1) + 1)
    this.name = names[idx]
  }




}
