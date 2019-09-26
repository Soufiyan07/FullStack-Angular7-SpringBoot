import { Component, OnInit } from '@angular/core';
import { LessonService } from '../service/data/lesson.service';

@Component({
  selector: 'app-lesson-add',
  templateUrl: './lesson-add.component.html',
  styleUrls: ['./lesson-add.component.css']
})
export class LessonAddComponent implements OnInit {
  fileToUpload: any;
  idNiveau:any;
  filename:string;
  message:string;
  constructor(private lessonService: LessonService) { }

  ngOnInit() {
  }

  handleFileInput(fileUpload: FileList) {
    this.fileToUpload = fileUpload.item(0);
  }

  uploadFileToActivity() {
    this.lessonService.postFilePdf(this.fileToUpload, this.filename,this.idNiveau).subscribe(
      response => {
        this.message='lesson Added successfully Thank you '+sessionStorage.getItem('username')
      }

    );
  }


}
