import { Component, OnInit } from '@angular/core';
import { todos, Note } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  cpt:number=0;
  selectedClass;
  message:string;
  Student=new todos();
  notes_final: Array<Note> = [];
  note1=new Note();
  note2=new Note();
  note3=new Note();
  constructor(private DataServiceStudent: TodoDataService) { }

  ngOnInit() {
  }

  AddNewStudent(){
    this.notes_final.push(this.note1)
    this.notes_final.push(this.note2)
    this.notes_final.push(this.note3)
    this.Student.notes_final=this.notes_final
    
    this.DataServiceStudent.AddNewStudent(this.Student).subscribe(
      response =>{
        console.log(this.Student)
        this.message='the student is added successfully !!'
      }
    );
  }
 onChange(newValue) {
 /*    
    if(newValue!=''){
console.log(newValue)    
  }else{
    this.cpt-1;
  }*/
}

}
