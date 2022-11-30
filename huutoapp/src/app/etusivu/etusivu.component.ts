import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-etusivu',
  templateUrl: './etusivu.component.html',
  styleUrls: ['./etusivu.component.css'],
})
export class EtusivuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
