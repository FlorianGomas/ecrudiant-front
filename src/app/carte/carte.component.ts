import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { StudentInfo } from '../studentInfo';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  students : StudentInfo[] = [];

  constructor(private studentService : StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      response => {
        this.students = response;
      }
    )
  }

  deleteButton(id : number){
    this.studentService.deleteStudent(id).subscribe();
    this.ngOnInit();
  }

}
