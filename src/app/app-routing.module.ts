import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
   { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: '', redirectTo: '/studentlist', pathMatch: 'full' },

   { path: 'app', component: AppComponent} ,
  { path: 'student', component: StudentComponent} ,
  { path: 'studentlist', component: StudentListComponent} 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
