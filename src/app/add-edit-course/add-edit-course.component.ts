import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/models/course-model';
import { CourseService } from '../shared/services/course.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.scss']
})
export class AddEditCourseComponent implements OnInit {

  title = "";
  description = "";
  duration = 0;
  date = new Date();
  authors = "";

  isEdition = false;
  currentId = 0;

  constructor(private courseService: CourseService,
    private route: ActivatedRoute, 
    private readonly router: Router) { }

  ngOnInit() {
    this.currentId = parseInt(this.route.snapshot.paramMap.get('id'));
    if (this.currentId !== 0) {
      const updateCourse = this.courseService.getItemById(this.currentId);
      if (updateCourse) {
        this.title = updateCourse.title;
        this.description = updateCourse.description;
        this.duration = updateCourse.duration;
        this.date = updateCourse.creationDate;
        this.isEdition = true;
      }
    }
  }

  AddNewCourse() {
    const newCourse = {
      title: this.title,
      creationDate: this.date,
      duration: this.duration,
      description: this.description,
      topRated: true
    } as Course;
    if(this.isEdition) {
      newCourse.id = this.currentId;
      this.courseService.updateCourse(newCourse);
    } else {
      this.courseService.createCourse(newCourse);
    }
    this.clearFields();
    this.router.navigate(['courses']);
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
