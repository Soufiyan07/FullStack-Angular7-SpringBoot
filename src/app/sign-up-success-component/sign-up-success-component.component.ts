import { Component, OnInit } from '@angular/core';
import { User } from '../login/login.component';

@Component({
  selector: 'app-sign-up-success-component',
  templateUrl: './sign-up-success-component.component.html',
  styleUrls: ['./sign-up-success-component.component.css']
})
export class SignUpSuccessComponentComponent implements OnInit {
  user:User;
  constructor() { }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem('user'));
  }


}
