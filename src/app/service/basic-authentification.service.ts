import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { todos } from '../list-todos/list-todos.component';
import { User } from '../login/login.component';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class BasicAuthentificationService {
 
  constructor(private http: HttpClient) { }

  /*authenticate(username) {
    let basicHeader = this.AuthentificationToAPI()
    let headers = new HttpHeaders({
      Authorization: basicHeader
    })

    return this.http.get<User>(`http://localhost:8080/User/${username}/Login`
      , { headers })

  }*/
  ExecuteAuthenticationService(username,password) {
    let basicHeader = 'basic ' + window.btoa(username + ':' + password)
    
    let headers = new HttpHeaders({
      Authorization: basicHeader
    })
 
    return this.http.get<User>(`http://localhost:8080/authenticate`
      , { headers }).pipe(
        map(
          data =>{
          sessionStorage.setItem('username',username)
          return data;
        }
        )
      )

  }

  isLoggedin() {

    let user = sessionStorage.getItem('username')
    return !(user === null)

  }
  logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('type');
  }

}

export class AuthentificationBean {

  constructor(public message: string) { }

}