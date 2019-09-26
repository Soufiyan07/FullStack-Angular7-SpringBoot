import { Component, OnInit } from '@angular/core';
import { LessonService } from '../service/data/lesson.service';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';

export class lesson {
  constructor(private idLesson: number = 0, private name_Lesson: string = '') { }

}

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  selectedLevel;
  lessonList: lesson[];
  message: string;
  path: string = 'Part2-29LessonPlanning.pdf'
  constructor(
    private router: Router,
    private LessonDataS: LessonService) { }

  ngOnInit() {
  }

  DonwloadFile(fileName) {
    /*this.LessonDataS.Download(this.path);
      console.log(this.path)
  */
    this.LessonDataS.downloadPdf(fileName)
      .then(blob => {
        saveAs(blob, fileName + '.pdf');
      });

  }
  selectedChange() {
    this.LessonDataS.getLessonByNiveau(this.selectedLevel).subscribe(
      response => {
        this.lessonList = response
      }
    )
  }



  /*downloadFile(data: any) {
  const blob = new Blob([data], { type: 'text/csv' });

  const url= window.URL.createObjectURL(blob);
  window.open(url);
  }
  public blobToFile = (theBlob: Blob, fileName:string): File => {
    var b: any = theBlob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;

    //Cast to a File() type
    return <File>theBlob;
  }*/



  toAddLesson() {
    this.router.navigate(['Student/lesson/add'])
  }
}
