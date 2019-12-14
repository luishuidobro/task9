import { Component, OnInit, OnChanges } from '@angular/core';
import { Course } from '../../shared/models/course-model';
import { CourseService } from '../../shared/services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnChanges, OnInit {
  public courseItems: Course[] = [];
  constructor(private courseService: CourseService, private router: Router) {
    console.log("Here is the constructor.");
   }

  ngOnInit() {
    this.courseItems = this.courseService.getCourses();
    console.log("Here is OnInit method.");
  }
  
  ngOnChanges() {
    console.log("Here is the OnChanges method.");
  }

  showDeleteMessage(event) {
    console.log(event);
    if (window.confirm('Are sure you want to delete this item ?')){
      this.courseService.removeItem(event);
    }
  }

  editCourse(event) {
    console.log(event);
    this.router.navigate(['courses/',event])
  }
}
