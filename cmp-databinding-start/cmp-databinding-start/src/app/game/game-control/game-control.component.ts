import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('incEvent') incEvent = new EventEmitter<{incNumber: number}>();
  incNumber: number = 0;
  intervalRef;

  constructor() { }

  ngOnInit() {
  }

  onStartButtonClicked() {
    this.intervalRef = setInterval(this.increment.bind(this), 1000);
  }

  onStopButtonClicked() {
    clearInterval(this.intervalRef);
  }

  increment() {
    this.incEvent.emit({
      incNumber: this.incNumber++
    });
  }

}
