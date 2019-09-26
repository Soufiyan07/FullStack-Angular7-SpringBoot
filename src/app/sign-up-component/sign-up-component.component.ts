import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { todos } from '../list-todos/list-todos.component';
import { User } from '../login/login.component';
import { UserDataService } from '../service/data/user-data.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-component',
  templateUrl: './sign-up-component.component.html',
  styleUrls: ['./sign-up-component.component.css']
})
export class SignUpComponentComponent implements OnInit {
  message: string;
  user = new User();
  firstname: any;
  firstnameMessage: string;
  formValidation: boolean = false;
  emailMessage: string;
  passwordMessage:string;
  constructor(private router: Router,
    private userDataDervice: UserDataService) { }

  ngOnInit() {
    const user = new User();
  }

  BackToLogin() {
    this.router.navigate(['/login'])

  }

  AddUserAccount() {
    if (this.ifFormIsValid() == true) {
      
    /*var userSession ={
      "firstname": this.user.user_firstname,
      "lastname": this.user.user_lastname,
      "email": this.user.user_emailadress,
      "password": this.user.user_password,
      "typeUser": this.user.user_type, 
      
    }*/
    localStorage.setItem('user', JSON.stringify(this.user));
    
    this.userDataDervice.UserAddService(this.user).subscribe(
        response => {
        this.message = 'the user is added successfully'
        
        sessionStorage.setItem('username', this.user.user_firstname);
        sessionStorage.setItem('type', this.user.user_type);
       
        this.router.navigate(['/sign-up/success']);
        });
    }
    console.log(this.user)
  }

  ifFormIsValid() {
    var emailParts = this.user.user_emailadress.split('@');
    this.firstnameMessage = ''
    this.emailMessage = ''
    this.passwordMessage=''
    if (this.user.user_firstname.length > 3) {
      if (this.user.user_emailadress.length > 10) {
        if (emailParts.length >= 2) {
          if (emailParts[1] == 'gmail.com') {
            if (this.user.user_password.length > 6) {
              return true;
            }else{
              this.passwordMessage = 'The password is not valide ! Error : password < 6 character ';
            }
          } else {
            this.emailMessage = 'the domain is not valide Error :' + emailParts[1];
          }
        }else{
          this.emailMessage = 'please enter the valide address email'    
        }
      } else {
        this.emailMessage = 'please enter the valide address email'
      }
    } else {
      this.firstnameMessage = 'the first name ids note valide !'
    }
  }
}