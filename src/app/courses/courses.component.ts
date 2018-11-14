import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  //templateUrl: './courses.component.html',
  template: "{{text|slice:'30'}}",
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  text = 'dsafasrgfgfdttfhgㄴㄴㄴㄴㄴjhjkjkbjcghghdthdghdgcnhkhjhgdhgfdhg';
  constructor() { }

  ngOnInit() {
  }

}
