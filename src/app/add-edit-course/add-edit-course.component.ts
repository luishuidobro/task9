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

  name = "";
  description = "";
  length = 0;
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
        this.name = updateCourse.name;
        this.description = updateCourse.description;
        this.length = updateCourse.length;
        this.date = updateCourse.date;
        this.isEdition = true;
      }
    }
  }

  AddNewCourse() {
    const newCourse = {
      id: this.currentId > 0 ? this.currentId : 0,
      name: this.name,
      date: this.date,
      length: this.length,
      description: this.description,
      isTopRated: true,
      authors: [
        {
          id: 0,
          name: this.authors,
          lastName: ''
        }
      ]
    } as Course;
    if(this.isEdition) {
      // newCourse.id = this.currentId;
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
    this.name = "";
    this.description = "";
    this.length = 0;
    this.date = new Date();
    this.authors = "";
  }

}
