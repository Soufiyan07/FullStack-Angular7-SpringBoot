import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export class Note{
    constructor(
      note:number=0,
      description_matiere:string=''
    ){}
}

export class todos{

  constructor(public id_etudiant:number=0,public first_etudiant:string='',public last_name:string=''
    ,public niveau_etudiant:number=0,public notes_final:Note[]=[],public description_etudiant:string='',public class_Etudiant:number=0,
    public email_Etudiant:string='') {}
  
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  public selectedClass; 
  public todo : todos;
   public todos : todos[];
   public message:string;
   usertype:string=sessionStorage.getItem('type');
  //   new todos('Soufiyan',23) ,
  //   new todos('Ahmed',60) ,
  //   new todos('mohammed',26) 
  // ]
  
  constructor(
    private Todos: TodoDataService,
    private router:Router
    ) { }
 
  ngOnInit() {
    console.log(localStorage.getItem('token'))
    this.Todos.getStudentsList().subscribe(
      response =>  {
        this.todos=response;
      }
    ); 
  }

  DeleteStudent(id_etudiant,firstName){
this.Todos.DeleteStudent(id_etudiant).subscribe(
      response => {
      this.message=`student ${firstName} is deleted successfuly `;
        this.todo=response; 
        this.Todos.getStudentsList().subscribe(
          response =>  {
            this.todos=response;
            
       
          }
        ); 
      }
    )
  }
  UpdateStudent(id_etudiant){
    this.router.navigate(['student/update/',id_etudiant]);
  }
  StudentNotes(idStudent){
    /*this.Todos.GetStudentNotes(id_etudiant).subscribe(
      response => {
        this.todo=response
      }
    )*/
    this.router.navigate(['/student',idStudent]);

  }
  goToAddStudent(){
    this.router.navigate(['Student/Add'])
  }
  selectedChange(){
    if(this.selectedClass==0){
      this.Todos.getStudentsList().subscribe(
        response =>  {
          this.todos=response;
        }
      ); 
    }else{
    this.Todos.getStudentByClass(this.selectedClass).subscribe(
      response => this.todos=response
    )
  }
  }

}
