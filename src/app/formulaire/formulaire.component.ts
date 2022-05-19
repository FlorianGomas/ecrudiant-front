import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';
import { FormBuilder } from '@angular/forms';
import { StudentInfo } from '../studentInfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  studentForm:FormGroup;
  student = new StudentInfo();
  constructor(public fb: FormBuilder, private studentService:StudentService, public router : Router) { 
    this.studentForm = fb.group({
      lastName: new FormControl(),
      firstName: new FormControl(),
      birthday: new FormControl(),
      company: new FormControl(),
      jobTitle: new FormControl(),
      email: new FormControl()
    });
  }

  get lastName(): any {
    return this.studentForm.get('lastName');
  }

  get firstName(): any {
    return this.studentForm.get('firstName');
  }

  get birthday(): any {
    return this.studentForm.get('birthday');
  }

  get email(): any {
    return this.studentForm.get('email');
  }

  get company(): any {
    return this.studentForm.get('company');
  }

  get jobTitle(): any {
    return this.studentForm.get('jobTitle');
  }

  ngOnInit(): void {
  }


  submit(){
    this.student.firstName = this.studentForm.get('firstName')?.value;
    this.student.lastName = this.studentForm.get('lastName')?.value;
    this.student.birthday = this.studentForm.get('birthday')?.value;
    this.student.company = this.studentForm.get('company')?.value;
    this.student.jobTitle = this.studentForm.get('jobTitle')?.value;
    this.student.email = this.studentForm.get('email')?.value;
    this.studentService.addStudent(this.student).subscribe(
      (val) =>{
        console.log("valeur retournee : ", val);
      },
      response => {
          console.log("POST call in error", response);
      });
      window.location.reload();
  }
}
