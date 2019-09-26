import { Component, OnInit } from '@angular/core';
import { SharingEmailServiceService } from '../service/data/sharing-email-service.service';
import { TodoDataService } from '../service/data/todo-data.service';
import { todos } from '../list-todos/list-todos.component';

export class Mail{
  
  
  constructor(public firstname:string='',public lastname:string=''
    ,public addressmail:string='',public subject:string='',public text:string=''){
  }

}

@Component({
  selector: 'app-sharing-email',
  templateUrl: './sharing-email.component.html',
  styleUrls: ['./sharing-email.component.css']
})
export class SharingEmailComponent implements OnInit {
  selectedClass:any;
  message:string;
  mail=new Mail();
  studentsList:todos[];
  constructor(private sharing: SharingEmailServiceService ,private student:TodoDataService ) { }

  ngOnInit() {
  }

  SendingEmailTo(){
    
    this.sharing.SendingEmail(this.mail).subscribe(
      response =>{
        this.message='your email is sending !! thank you .'
      }

    );
  }

  selectedChange(){
    if(this.selectedClass==0){
      this.student.getStudentsList().subscribe(
        response =>  {
          this.studentsList=response;
        }
      ); 
    }else{
    this.student.getStudentByClass(this.selectedClass).subscribe(
      response => this.studentsList=response
    )
  }
  }

  remplireChamps(student){
    this.mail.firstname=student.first_etudiant;
    this.mail.lastname=student.last_name;
    this.mail.addressmail=student.email_Etudiant;
    

  }


}
