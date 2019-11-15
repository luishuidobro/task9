import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../shared/models/course-model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  @Output() myDeletedCourse = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteItem(){
    this.myDeletedCourse.emit('I deleted item with id: ' + this.course.id);
  }

}
