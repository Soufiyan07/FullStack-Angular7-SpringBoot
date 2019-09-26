import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{

  constructor(public message){}

}
@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(private http: HttpClient) { }
 
  getHelloWorldBeanValue(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-Bean');
    //    console.log("He llo World");
  }
  getHelloWorldBeanParameter(paramV){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/${paramV}`);
    //    console.log("Hello World");
  }


}
