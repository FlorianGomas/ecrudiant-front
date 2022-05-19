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

  isLoaded:boolean = false;
  students : StudentInfo[] = [];

  constructor(private studentService : StudentService, public router : Router) { }

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
    this.reloadCurrentRoute();
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
        this.ngOnInit();
    });
  }

}
