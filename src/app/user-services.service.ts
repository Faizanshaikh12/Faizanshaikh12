import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor() { }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  addUser(user) {
    let users = [];
    if (localStorage.getItem('Users')){
      users = JSON.parse(<string> localStorage.getItem('Users'));
      users = [user, ...users];  // ...Seprated sign
    }else{
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
