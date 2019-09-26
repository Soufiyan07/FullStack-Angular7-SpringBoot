import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HardcodedAuthentificationService } from '../service/hardcoded-authentification.service';
import { todos } from '../list-todos/list-todos.component';
import { BasicAuthentificationService } from '../service/basic-authentification.service';
export class User{

	
  constructor( 
    public user_id:number=0,
    public user_firstname:any='',
    public user_lastname:string='',
    public user_emailadress:string='',
    public user_type:string='',
    public user_password:any='',
  ){}

}
@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  message:string;
  login=''
  password ='';
  user: User;
  constructor(private router: Router,private HardcodedAuthentificationService: HardcodedAuthentificationService,
    private basicAuth: BasicAuthentificationService) { }

  ngOnInit() {
  }

  handleLogin() {  
    console.log(this.login)
    console.log(this.password)     
  this.HardcodedAuthentificationService.authenticate(this.login).subscribe(
    response => {
      this.user=response
      if(this.user.user_password==this.password && this.user.user_firstname==this.login){
    
        sessionStorage.setItem('username', this.login);
        sessionStorage.setItem('type', response.user_type);
        this.router.navigate(['/welcome',this.login])
    
      }else{
      this.message='Login or Password incorrect'
    }
    }
  );
  
}
/*handleBasicAuthLogin() {  
  console.log(this.login)
  console.log(this.password)     
this.basicAuth.ExecuteAuthenticationService(this.login,this.password).subscribe(
  response => {
    this.user=response
    if(this.user.user_password==this.password && this.user.user_firstname==this.login){
   
      sessionStorage.setItem('username', this.login);
      sessionStorage.setItem('type', response.user_type);
      this.router.navigate(['/welcome',this.login])
  
    }else{
    this.message='Login or Password incorrect'
  }
  },error =>{
    console.log(error)
  }
);

}*/
ifUsernamePassword(){
  if(this){

  }
}

NivigateToSignUp(){
  this.router.navigate(['Student/SignUp'])
}
}
