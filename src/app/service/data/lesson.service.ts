import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lesson } from 'src/app/lesson/lesson.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  file:File;
  constructor(
    private router: Router, private http: HttpClient) { }

  downloadPdf(fileName) {
    let basicHeader=this.AuthentificationToAPI()
    let headers=new HttpHeaders({
      Authorization : basicHeader
    })
  
    return this.http.get(`http://localhost:8080/Download/Pdf/${fileName}`, { responseType: 'blob' ,headers}).toPromise();

  }
  getLessonByNiveau(idNiveau) {
    let basicHeader=this.AuthentificationToAPI()
    let headers=new HttpHeaders({
      Authorization : basicHeader
    })
  
    return this.http.get<lesson[]>(`http://localhost:8080/Student/Lesson/Niveau/${idNiveau}`,{headers})
  }

  postFilePdf(fileUpload,fileName,idNiveau) {
    let basicHeader=this.AuthentificationToAPI()
    let headers=new HttpHeaders({
      Authorization : basicHeader
    })
  
    return this.http.post(
      `http://localhost:8080/lesson/add/upload/${fileName}/${idNiveau}`
      ,fileUpload,{headers});
   }

  
AuthentificationToAPI(){
  let username='Soufiyan'
  let password='Azer123'

  let basicHeader='basic '+window.btoa(username+':'+password)
  return basicHeader;
}



  }
