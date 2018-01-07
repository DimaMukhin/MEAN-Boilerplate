import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UniversityService {

  constructor(private http: Http) { }

  /**
   * get all the students from the API
   * @return all the students
   */
  public getAllStudents(): Observable<any> {
    return this.http.get('http://localhost:3000/api/student').map((students) => {
      return students.json();
    }).catch((error) => {
      return Observable.throw(error);
    });
  }

}
