import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-angular-basic',
  templateUrl: './angular-basic.component.html',
  styleUrls: ['./angular-basic.component.css']
})
export class AngularBasicComponent implements OnInit {

  @Output() greeting = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChildClick() {
    console.log("Hi, mom. I'm susan.");
    this.greeting.emit();
  }
}
