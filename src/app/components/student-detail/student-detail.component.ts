import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../../services/student-data.service';
import { Student } from '../../models/student';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: Student;

  constructor(private dataService: StudentDataService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    let roll: number;
    this.route.params.subscribe(params => roll = +params['roll']);
    this.dataService.getStudent(roll).then(data => this.student = data);
  }

  goBack(): void {
    this.location.back();
  }

}
