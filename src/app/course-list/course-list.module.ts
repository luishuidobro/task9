import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CourseListComponent, CourseItemComponent, SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CourseListComponent,
    SearchComponent,
  ]
})
export class CourseListModule { }
