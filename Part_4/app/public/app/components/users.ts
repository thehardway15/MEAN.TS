import {Component, View} from 'angular2/core';

@Component({
  selector: 'users'
})

@View({
    templateUrl: './app/views/users_list.html' 
})
export class UsersComponent {
  users: Array<string>;  
  constructor() {
    this.users = ['Janusz', 'Danuta', 'Tomasz', 'Karol'];
  }
}