import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { todos } from '../list-todos/list-todos.component';
import { User } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthentificationService {

  constructor(private http: HttpClient) { }

  authenticate(username) {
    let basicHeader=this.AuthentificationToAPI()
    let headers=new HttpHeaders({
      Authorization : basicHeader
    })
    
    return this.http.get<User>(`http://localhost:8080/User/${username}/Login`
    ,{headers})

  }
  AuthentificationToAPI(){
    let username='Soufiyan'
    let password='Azer123'

    let basicHeader='basic '+window.btoa(username+':'+password)
    return basicHeader;
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