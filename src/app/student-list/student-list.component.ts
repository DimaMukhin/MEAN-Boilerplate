import { Component, OnInit } from '@angular/core';

import { UniversityService } from '../shared/services/university/university.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: any[];

  constructor(private universityService: UniversityService) { }

  ngOnInit() {
    this.students = [];
    this.getAllStudents();
  }

  /**
   * get all students for display from university
   */
  private getAllStudents(): void {
    this.universityService.getAllStudents().subscribe((students) => {
      this.students = students;
    }, (error) => {
      console.log(error);
    });
  }

}
