import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentDataService } from '../../services/student-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
  providers: [StudentDataService]
})
export class StudentsListComponent implements OnInit {

  students: Student[];

  constructor(private dataService: StudentDataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getStudents().then((data) => this.students = data);
  }

  onSelect(stud: Student): void {
    this.router.navigate(['/detail', stud.roll]);
  }

}
