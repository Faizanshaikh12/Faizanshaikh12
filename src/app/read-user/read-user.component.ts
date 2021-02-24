import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent implements OnInit {

  user: any = {};
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(<string> localStorage.getItem('Users'));
  }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  delete(index){
    if(index) {
      console.log(index);
      this.user.splice(index);
      localStorage.setItem('Users', JSON.stringify(this.user));
    }else{
      this.user = localStorage.removeItem('Users');
    }

  }
}
