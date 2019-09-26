import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { todos } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-student-notes',
  templateUrl: './student-notes.component.html',
  styleUrls: ['./student-notes.component.css']
})
export class StudentNotesComponent implements OnInit {
  todos: todos
  idstudent:string;
  constructor(private todoservice: TodoDataService ,private router: ActivatedRoute ) { }

  ngOnInit() {

  this.idstudent = this.router.snapshot.params['idStudent'];
  
this.StudentNotes();
}
StudentNotes(){
  this.todoservice.GetStudentNotes(this.idstudent).subscribe(
      response => {
        console.log(response)
        this.todos=response;
      }
  );
}
  


}