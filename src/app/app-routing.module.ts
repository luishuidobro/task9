import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';
import { CourseListComponent } from './course-list/course-list/course-list.component';
import { CourseItemComponent } from './course-list/course-item/course-item.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AuthGuard } from './core/auth.guard';
import { LoginComponent } from './login/login/login.component';


const routes: Routes = [
  {
    path: '', 
    redirectTo: 'courses', 
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      breadcrumb: 'login'
    },
  },
  {
    path: 'courses',
    canActivate: [AuthGuard],
    component: CourseListComponent,
    data: {
      breadcrumb: 'courses'
    },
  },
  {
    path: 'courses/new',
    canActivate: [AuthGuard],
    component: AddEditCourseComponent,
    data: {
      breadcrumb: 'courses/new'
    },
  },
  {
    path: 'courses/:id',
    canActivate: [AuthGuard],
    component: AddEditCourseComponent,
    data: {
      breadcrumb: 'courses/edit'
    },
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
