import { Injectable } from '@angular/core';
import { STUDENTS } from './mock-data';
import { Student } from '../models/student';

@Injectable()
export class StudentDataService {

  constructor() { }

  getStudents(): Promise<Student[]> {
    return Promise.resolve(STUDENTS);
  }

  getStudent(roll: number): Promise<Student> {
    return this.getStudents().then(studs => studs.find(stud => stud.roll === roll));
  }

}
