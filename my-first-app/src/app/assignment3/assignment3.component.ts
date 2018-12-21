import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  textVisible = false;
  logArray = [];
  
  constructor() { }

  ngOnInit() {
  }

  toggleText() {
    this.textVisible = !this.textVisible;
    this.logBtnAction(this.textVisible);
  }

  logBtnAction(val) {
    let index = this.logArray.length + 1;
    this.logArray.push(index + ': value: ' + val.toString() + ' - ' + new Date());
  }

  highlightBackground(index) {
    if(index >= 5) return 'dodgerblue';
  }
}
