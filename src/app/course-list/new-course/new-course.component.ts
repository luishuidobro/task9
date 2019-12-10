import { Component, OnInit } from '@angular/core';
import { Course } from '../../shared/models/course-model';
import { CourseService } from '../../shared/services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {

  title = "";
  description = "";
  duration = 0;
  date = new Date();
  authors = "";

  constructor(private courseService: CourseService,
    private readonly router: Router) { }

  ngOnInit() {
  }

  AddNewCourse() {
    const newCourse = {
      title: this.title,
      creationDate: this.date,
      duration: this.duration,
      description: this.description,
      topRated: true
    } as Course;
    this.courseService.createCourse(newCourse);
    this.clearFields();
  }

  Cancel() {
    this.clearFields();
    this.router.navigate(['courses']);
  }

  clearFields() {
    this.title = "";
    this.description = "";
    this.duration = 0;
    this.date = new Date();
    this.authors = "";
  }

}
