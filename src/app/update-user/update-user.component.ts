import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: any = {};

  constructor() {
  }

  ngOnInit(): void {
    this.user = JSON.parse(<string> localStorage.getItem('Users'));
  }

  update(){

  }
}
