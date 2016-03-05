import {Component, View} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {UsersComponent} from './users'
import {RegisterComponent} from './register'
import {LoginComponent} from './login'

@Component({
  selector: 'my-app'
})
@View({
  template: `
  <div style="margin:100px;">
    <nav class="navbar navbar-inverse navbar-static-top">
      <div class="container">
        <a class="navbar-brand" href="/">Express HTML</a>
        <ul class="nav navbar-nav">
          <li>
            <a [routerLink]="['Users']">Users list</a>
          </li>
          <li>
            <a [routerLink]="['Register']">Register</a>
          </li>
          <li>
            <a [routerLink]="['Login']">Login</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="jumbotron"  style="padding:40px;">
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/users', name: 'Users', component: UsersComponent, useAsDefault: true},
  {path: '/register', name: 'Register', component: RegisterComponent},
  {path: '/login', name: 'Login', component: LoginComponent}
])
export class AppComponent {}
