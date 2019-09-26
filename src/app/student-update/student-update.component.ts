import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { todos, Note } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  message:string;
  idStudent: any;
  todo: todos;
  todos: todos[]
  notes_final: Array<Note> = [];
  note1=new Note();
  note2=new Note();
  note3=new Note();
  constructor(private dataStudentService: TodoDataService ,private router: ActivatedRoute) { }

  ngOnInit() {
    this.idStudent=this.router.snapshot.params['idStudent'];
    this.dataStudentService.GetStudentById(this.idStudent).subscribe(
      response => {
        this.todo=response;
      }
    ) 
  }

  UpdateStudent(){
    this.notes_final.push(this.note1)
    this.notes_final.push(this.note2)
    this.notes_final.push(this.note3)
    this.todo.notes_final=this.notes_final
      this.dataStudentService.UpdateStudent(this.idStudent,this.todo).subscribe(
        /*response=> {
          this.message=`the student ${this.todo.firstName} is updated successefuly`;
          this.dataStudentService.getStudentsList().subscribe(
            response =>  {
              this.todos=response;
            }
          ); 
        }*/
        data => {
          this.message=`The Student is Updated ${this.todo.first_etudiant} successfully`
        }
      );

  }

}
