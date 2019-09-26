import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Mail } from 'src/app/sharing-email/sharing-email.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class SharingEmailServiceService {

  constructor(private router: Router,private http: HttpClient) { }


  SendingEmail(mail: Mail){
    return this.http.post(`http://localhost:8080/SendingMail`, mail );
  }



}
