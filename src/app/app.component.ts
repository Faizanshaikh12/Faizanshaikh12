import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
}


//
// // registrationForm = new FormGroup({
// //   userName: new FormControl(''),
// //   password: new FormControl(''),
// //   confirmPassword: new FormControl(''),
// //   address: new FormGroup({
// //     city: new FormControl(''),
// //     state: new FormControl(''),
// //     pincode: new FormControl('')
// //   })
// // });
//
// // tslint:disable-next-line:typedef
// loadApiData(){
//   // this.registrationForm.patchValue({
//   //   userName: 'Faizan',
//   //   password: '123',
//   //   confirmPassword: '123',
//   //   address: {
//   //     city: 'Patan',
//   //     state: 'Gujarat',
//   //     pincode: '384265'
//   //   }
//   // });
