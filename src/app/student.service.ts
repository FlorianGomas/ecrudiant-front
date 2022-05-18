import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StudentInfo } from './studentInfo';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient : HttpClient) { }

  getStudents() : Observable<StudentInfo[]>{
    return this.httpClient.get<StudentInfo[]>(environment.apiUrl + '/students');
  }

}
