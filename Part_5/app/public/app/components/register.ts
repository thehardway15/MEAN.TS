import {Component} from 'angular2/core'
import {RegisterFormComponent} from './register-form';

@Component({
  template: `
    <register-form></register-form>
  `,
  directives: [RegisterFormComponent]
})
export class RegisterComponent {}
