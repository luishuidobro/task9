import { Component, OnInit, OnChanges } from '@angular/core';
import { Course } from '../../shared/models/course-model';
import { CourseService } from '../../shared/services/course.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthorizacionService } from "../../core/authorization_service"

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnChanges, OnInit {
  public courseItems: Course[] = [];
  isAuthenticated = false;
  constructor(
    private courseService: CourseService, 
    private router: Router, 
    private httpClient: HttpClient,
    private authorizacionService: AuthorizacionService) {
    console.log("Here is the constructor.");
    this.isAuthenticated = this.authorizacionService.isAuthenticated();
    if (!this.isAuthenticated) {
      this.router.navigate(['login']);
    }
    this.courseItems = this.courseService.getFirstsCourses();
   }

  ngOnInit() {
    this.courseItems = this.courseService.getFirstsCourses();
    console.log("Here is OnInit method.");
  }
  
  ngOnChanges() {
    this.courseItems = this.courseService.getCourses();
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
    this.router.navigate(['courses/',event]);
  }

  LoadMore() {
    // this.httpClient.get<Course[]>('http://localhost:3004/courses/')
    // .subscribe((courses) => {
    //   this.courseItems = courses;
    //   console.log(courses);
    // });
    this.courseItems= this.courseService.getCourses();
  }

  search(event) {
    this.httpClient.get<Course[]>('http://localhost:3004/courses/',
    {params: {textFragment: event}})
    .subscribe((courses) => {
      this.courseItems = courses;
    });
  }
}
