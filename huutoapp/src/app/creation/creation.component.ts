import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms'

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    
  }


  public vaihtoehdot = [
    {
      vaihtoehto: ''
    }
  ];

  addForm() {
    this.vaihtoehdot.push({
      vaihtoehto: '',
    });

    console.log(this.vaihtoehdot)
  }
  

}