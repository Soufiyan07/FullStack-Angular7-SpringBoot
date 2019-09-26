import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient, router: Router) { }





  UserAddService(user){
    return this.http.post(`http://localhost:8080/User/Add`,user);
  }







}
