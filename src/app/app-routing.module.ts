import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { NewCourseComponent } from './course-list/new-course/new-course.component';
import { CourseListComponent } from './course-list/course-list/course-list.component';


const routes: Routes = [
  {
    path: '', 
    redirectTo: 'courses', 
    pathMatch: 'full'
  },
  {
    path: 'courses', 
    component: CourseListComponent
  },
  {
    path: 'courses/:add',
    component: NewCourseComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
