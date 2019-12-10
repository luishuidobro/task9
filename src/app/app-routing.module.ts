import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { NewCourseComponent } from './course-list/new-course/new-course.component';
import { CourseListComponent } from './course-list/course-list/course-list.component';
import { CourseItemComponent } from './course-list/course-item/course-item.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [
  {
    path: '', 
    redirectTo: 'courses', 
    pathMatch: 'full'
  },
  {
    path: 'courses',
    canActivate: [AuthGuard],
    component: CourseListComponent
  },
  {
    path: 'courses/new',
    canActivate: [AuthGuard],
    component: NewCourseComponent
  },
  {
    path: 'courses/:id',
    canActivate: [AuthGuard],
    component: CourseItemComponent
  },
  {
    path: '404', 
    component: NotFoundComponent
  },
  {
    path: '**', 
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
