import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from '../../components/default/default.component';
import { StudentsListComponent } from '../../components/students-list/students-list.component';
import { StudentDetailComponent } from '../../components/student-detail/student-detail.component';

const routes: Routes = [
  { path: 'home', component: DefaultComponent },
  { path: 'detail/:roll', component: StudentDetailComponent },
  { path: 'students', component: StudentsListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
