import {Component, View} from 'angular2/core'
import {HTTP_PROVIDERS} from 'angular2/http'
import {FormBuilder, ControlGroup, FORM_DIRECTIVES, Validators} from 'angular2/common'
import {UserService} from '../userService'

@Component({
  selector: 'register-form',
  providers: [HTTP_PROVIDERS, UserService]
})
@View({
  template: `
  <div class="container">
      <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
          <div class="panel panel-info" >
            <div class="panel-heading">
                <div class="panel-title">Create User</div>
                {{res}}
            </div>
            <div style="padding-top:30px" class="panel-body" >

                <form id="loginform" (ngSubmit)="createUser()" [ngFormModel]="createUserForm" class="form-horizontal" role="form">

                    <div style="margin-bottom: 25px" class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                <input [ngFormControl]="createUserForm.controls['name']" id="login-username" type="text" class="form-control" name="login" value="" placeholder="login">
                            </div>

                    <div style="margin-bottom: 25px" class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                <input [ngFormControl]="createUserForm.controls['password']" id="login-password" type="password" class="form-control" name="password" placeholder="password">
                            </div>

                        <div style="margin-top:10px" class="form-group">
                            <!-- Button -->

                            <div *ngIf="!createUserForm.valid" class="ui error message">Form is invalid</div>

                            <div class="col-sm-12 controls">
                                <input [disabled]="!createUserForm.valid" type="submit" value="submit" class="btn btn-primary" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
      </div>
  </div>
  `,
  directives: [FORM_DIRECTIVES]
})
export class RegisterFormComponent {
  createUserForm: ControlGroup;
  res: string;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.createUserForm = fb.group({
      'name': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  createUser(): void {
    console.log('Create service')
    console.log(this.createUserForm.value)
    this.userService.addUser(this.createUserForm.value).subscribe(res => this.res = res._body)
  }
}
