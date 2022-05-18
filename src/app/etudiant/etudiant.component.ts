import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { StudentInfo } from '../studentInfo';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  student:StudentInfo ;
  constructor(private route:ActivatedRoute, private studentService:StudentService) { 

  }

  ngOnInit(): void {
    const studentId = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.studentService.getStudent(studentId).subscribe(
      response => {
        this.student = response;
      }
    )
  }

}
