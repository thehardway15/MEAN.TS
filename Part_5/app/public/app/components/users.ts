import {Component, View} from 'angular2/core'
import {HTTP_PROVIDERS} from 'angular2/http'
import {UserService} from '../userService'
import {User} from '../models/users'

@Component({
  selector: 'users',
  providers: [HTTP_PROVIDERS, UserService]
})
@View({
  template: `
  <h1>Lista użytkowników</h1>
  <ul>
      <li *ngFor="#user of users">{{ user.name }}</li>
  </ul>
  `
})
export class UsersComponent {

  users: Array<User>;

  constructor(private _userService: UserService) {}
  ngOnInit() { this.getUsers(); }

  getUsers() {
    this._userService.getAllUsers().subscribe(res => this.users = res)
  }
}
