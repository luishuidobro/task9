import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListModule } from './course-list/course-list.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { AddEditCourseModule } from './add-edit-course/add-edit-course.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CourseListModule,
    FormsModule,
    LoginModule,
    BrowserAnimationsModule,
    AddEditCourseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
