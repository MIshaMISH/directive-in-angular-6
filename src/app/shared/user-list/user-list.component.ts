import {Component, OnInit} from '@angular/core';
import {users, UserModel} from '../../data/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: Array<UserModel>;

  constructor() {
    this.users = users;
  }

  ngOnInit() {
  }

}
