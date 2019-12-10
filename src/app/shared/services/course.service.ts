import { Injectable } from '@angular/core';
import { Course } from '../models/course-model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Course[] = [
    {
      id: 1,
      title: "Course1",
      creationDate: new Date('2019/10/01'),
      duration: 88,
      description: "Description for course 1",
      topRated: true
    },
    {
      id: 2,
      title: "Course2",
      creationDate: new Date('2019/09/01'),
      duration: 92,
      description: "Description for course 2",
      topRated: false
    },
    {
      id: 3,
      title: "Course3",
      creationDate: new Date('2019/12/01'),
      duration: 74,
      description: "Description for course 3",
      topRated: true
    },
    {
      id: 4,
      title: "Course4",
      creationDate: new Date('2019/11/22'),
      duration: 146,
      description: "Description for course 4",
      topRated: false
    }
  ];

  constructor() { }

  getCourses(): Course[] {
    return this.courses;
  }

  createCourse(newCourse: Course) {
    newCourse.id = this.courses.length + 1;
    this.courses.push(newCourse);
  }

  getItemById(id: number) {
    return this.courses.find(item => item.id === id);
  }

  updateCourse(newCourse: Course) {
    let itemIndex = this.courses.findIndex(item => item.id === newCourse.id);
    this.courses[itemIndex] = newCourse;
  }

  removeItem(courseId: number) {
    let itemIndex = this.courses.findIndex(item => item.id === courseId);
    this.courses.splice(itemIndex, 1);
  }
}
