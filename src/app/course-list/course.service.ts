import { Injectable } from '@angular/core';
import { Course } from '../shared/models/course-model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(): Course[] {
    return [
      {
        id: 1,
        title: "Course1",
        creationDate: new Date(),
        duration: 88,
        description: "Description for course 1"
      },
      {
        id: 2,
        title: "Course2",
        creationDate: new Date(),
        duration: 88,
        description: "Description for course 2"
      },
      {
        id: 3,
        title: "Course3",
        creationDate: new Date(),
        duration: 88,
        description: "Description for course 3"
      },
      {
        id: 4,
        title: "Course4",
        creationDate: new Date(),
        duration: 88,
        description: "Description for course 4"
      }
    ];
  }
}
