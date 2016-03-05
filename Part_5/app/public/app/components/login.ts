import {Component} from 'angular2/core'
import {LoginFormComponent} from './login-form';

@Component({
  template: `
    <login-form></login-form>
  `,
  directives: [LoginFormComponent]
})
export class LoginComponent {}
