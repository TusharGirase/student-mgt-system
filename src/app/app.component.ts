import { Component, OnInit } from '@angular/core';
import { StudentDataService } from './services/student-data.service';
import { Student } from './models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentDataService]
})
export class AppComponent implements OnInit {
  students: Student[];

  constructor(private dataService: StudentDataService) { }

  ngOnInit(): void {
    this.dataService.getStudents().then(data => this.students = data);
  }

}
