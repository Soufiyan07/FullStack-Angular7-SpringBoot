 import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  messageFromService: String ='Nothing';
  parameterValue: String;
  errorFromService: String ;
  constructor(private router: ActivatedRoute , private welcomeData: WelcomeDataService) { }

  ngOnInit() {
    console.log(this.router.snapshot.params['name']);
  }

  getwelcomeData() {
    // console.log(this.welcomeData.getHelloWorldBeanValue().subscribe());
    
    this.welcomeData.getHelloWorldBeanValue().subscribe(
      response => this.ifResponseisBack(response),
      error => this.ifErrorisBack(error)
    );
  }

  getWelcomeValueParameter(){
    this.welcomeData.getHelloWorldBeanParameter('Soufiyan').subscribe(
      response => this.ifGetValueParameter(response)
    );
  }

  localStorageFunctionUsername(){
    return sessionStorage.getItem('username')
  }

  ifGetValueParameter(response){
    this.parameterValue = response.message;
  }

  ifErrorisBack(error){
  this.errorFromService =error.error.message;
  }

  ifResponseisBack(response){
   // console.log(response);
   // console.log(response.message);
  this.messageFromService = response.message;
}
}
