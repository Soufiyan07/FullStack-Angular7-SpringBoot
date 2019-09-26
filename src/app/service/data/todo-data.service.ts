import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { todos } from 'src/app/list-todos/list-todos.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
 
  constructor(private http: HttpClient  ,private router: Router) { }

  getStudentsList(){
 
    return this.http.get<todos[]>(`http://localhost:8080/Students-list-Infos`);

  }
   
  DeleteStudent(id_etudiant){
       return this.http.delete<todos>(`http://localhost:8080/Student/Delete/${id_etudiant}`); 
  }
  UpdateStudent(id_etudiant,student){
    return this.http.put(`http://localhost:8080/Student/Update/${id_etudiant}`,student);

  }
  GetStudentNotes(id_etudiant){
    return this.http.get<todos>(`http://localhost:8080/Student/${id_etudiant}`);
  }
  GetStudentById(idStudent){
    return this.http.get<todos>(`http://localhost:8080/Student/Update/Infos/${idStudent}`);
  }
  AddNewStudent(student){
    return this.http.post(`http://localhost:8080/Student/Add`,student);
  }
  getStudentByClass(idClass){
    return this.http.get<todos[]>(`http://localhost:8080/Student/class/${idClass}`);
  }
  

}
