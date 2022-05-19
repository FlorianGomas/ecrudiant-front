import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentInfo } from '../studentInfo';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  student = new StudentInfo();
  studentForm:FormGroup;

  constructor(private route:ActivatedRoute, private studentService:StudentService, public fb: FormBuilder, public router : Router) {
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
    const studentId = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.studentService.getStudent(studentId).subscribe(
      response => {
        this.student = response;
        this.studentForm.get("firstName")?.setValue(this.student.firstName);
        this.studentForm.get("lastName")?.setValue(this.student.lastName);
        this.studentForm.get("birthday")?.setValue(this.student.birthday);
        this.studentForm.get("email")?.setValue(this.student.email);
        this.studentForm.get("company")?.setValue(this.student.company);
        this.studentForm.get("jobTitle")?.setValue(this.student.jobTitle);
      }
    )
  }

  submit(){
    const studentId = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.student.firstName = this.studentForm.get('firstName')?.value;
    this.student.lastName = this.studentForm.get('lastName')?.value;
    this.student.birthday = this.studentForm.get('birthday')?.value;
    this.student.company = this.studentForm.get('company')?.value;
    this.student.jobTitle = this.studentForm.get('jobTitle')?.value;
    this.student.email = this.studentForm.get('email')?.value;
    this.studentService.updateStudent(this.student, studentId).subscribe(
      (val) =>{
        console.log("valeur retournee : ", val);
      },
      response => {
          console.log("PUT call in error", response);
      });
      this.router.navigate(['/etudiant/'+ this.student.id]);
  }

}
