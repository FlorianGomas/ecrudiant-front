import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    window.location.reload();
    this.ngOnInit();
  }

}
