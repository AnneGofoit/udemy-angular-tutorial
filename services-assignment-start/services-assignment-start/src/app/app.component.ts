import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers: string[];
  inactiveUsers: string[];

  constructor(private usersservice: UsersService, private counterservice: CounterService){ }

  ngOnInit() {
    this.activeUsers = this.usersservice.activeUsers;
    this.inactiveUsers = this.usersservice.inactiveUsers;
  }

  onSetToInactive(id: number) {
    this.usersservice.setToInactive(id);
    this.counterservice.setToInactive();
  }

  onSetToActive(id: number) {
    this.usersservice.setToActive(id);
    this.counterservice.setToActive();
  }
}
