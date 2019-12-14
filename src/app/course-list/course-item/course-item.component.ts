import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../shared/models/course-model';
import { CourseService } from '../../shared/services/course.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  @Output() myDeletedCourse = new EventEmitter();
  @Output() myEditCourse = new EventEmitter();
  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  updateItem() {
    // this.courseService.getItemById(this.course.id);
    this.myEditCourse.emit(this.course.id);
  }

  deleteItem(){
    this.myDeletedCourse.emit(this.course.id);
  }

}
