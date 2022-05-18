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

  getStudent(id:number) : Observable<StudentInfo> {
    return this.httpClient.get<StudentInfo>(environment.apiUrl + '/students/' + id);
  }

  deleteStudent(id:number): Observable<Object>{
    return this.httpClient.delete(environment.apiUrl + '/students/' + id);
  }

  addStudent(newStudent:StudentInfo): Observable<any> {
    const headers = { 'content-type': 'application/json'};  
    return this.httpClient.post(environment.apiUrl + '/students',newStudent,{'headers': headers});
  }
}
