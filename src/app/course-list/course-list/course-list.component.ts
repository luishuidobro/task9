import { Component, OnInit, OnChanges } from '@angular/core';
import { Course } from '../../shared/models/course-model';
import { CourseService } from '../../shared/services/course.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthorizacionService } from "../../shared/services/authorization_service"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  public courseItems: Course[] = [];
  courses$ = new Observable<Course[]>();
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
    this.courses$ = this.courseService.getFirstsCourses();
    this.courses$.subscribe((courses) => this.courseItems = courses);
   }

  ngOnInit() {
    // this.courses$ = this.courseService.getFirstsCourses();
    // this.courses$.subscribe((courses) => this.courseItems = courses);
    console.log("Here is OnInit method.");
  }
  
  ngOnChanges() {
    this.courseService.getCourses().subscribe((courses) => this.courseItems = courses);
    this
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
    this.courseService.getCourses().subscribe((courses) => this.courseItems = courses);
  }

  search(event) {
    // this.httpClient.get<Course[]>('http://localhost:3004/courses/',
    // {params: {textFragment: event}})
    // .subscribe((courses) => {
    //   this.courseItems = courses;
    // });
    this.courseItems = event;
  }
}
