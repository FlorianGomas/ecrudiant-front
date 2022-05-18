import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';
import { FormBuilder } from '@angular/forms';
import { StudentInfo } from '../studentInfo';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  form:FormGroup;
  constructor(public fb: FormBuilder, private studentService:StudentService) { 
    this.form = this.fb.group({
      lastName: [''],
      firstName: [null],
      birthday: [null],
      company: [null],
      jobTitle: [null],
      email: [null]
    });
  }

  ngOnInit(): void {
  }

  envoi():void{
    let formData = new FormData();
    formData.append('lastName',this.form.get('lastName')?.value);
    formData.append('firstName', this.form.get('firstName')?.value);
    formData.append('birthday', this.form.get('birthday')?.value);
    formData.append('company', this.form.get('company')?.value);
    formData.append('jobTitle', this.form.get('jobTitle')?.value);
    formData.append('email', this.form.get('email')?.value);

    this.studentService.addStudent(formData).subscribe;
  }
}
