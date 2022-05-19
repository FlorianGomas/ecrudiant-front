import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { StudentInfo } from '../studentInfo';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  isLoaded:boolean = false;
  students : StudentInfo[] = [];

  constructor(private studentService : StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      response => {
        this.students = response;
        this.isLoaded = true;
      }
    )
  }

  deleteButton(id : number){
    this.isLoaded = false;
    this.studentService.deleteStudent(id).subscribe();
    window.location.reload();
    this.ngOnInit();
  }

}
