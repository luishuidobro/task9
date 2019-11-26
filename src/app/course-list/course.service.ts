import { Injectable } from '@angular/core';
import { Course } from '../shared/models/course-model';

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
    this.courses.push(newCourse);
  }

  getItemById(id: number) {
    return this.courses.filter(item => item.id === id);
  }

  updateCourse(course: Course) {
    if (this.courses.filter(item => item.id === course.id)) {
      this.courses[course.id - 1] = course;
    }
  }

  removeItem(courseId: number) {
    if (courseId > 0 && (this.courses.length <= courseId - 1)) {
      this.courses.splice(courseId - 1, 1);
    }
  }
}
