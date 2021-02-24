import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { PasswordValidator } from '../shared/password.validator';
import {UserServicesService} from '../user-services.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private fb: FormBuilder, private userServices: UserServicesService) {}

  user: any = {};

  // @ts-ignore
  registrationForm = this.fb.group({
    userName: [''],
    password: [''],
    confirmPassword: ['']
  }, {validator: PasswordValidator} );

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  onSubmit(){
    console.log(this.registrationForm.value);
    this.user = Object.assign(this.user, this.registrationForm.value);
    this.userServices.addUser(this.user);
    this.registrationForm.reset();
  }
}
