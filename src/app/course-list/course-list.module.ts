import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../shared/pipes/pipes.module';
import { DirectivesModule } from '../shared/directives/directives.module';
import { CoreModule } from '../core/core.module';
import { DateComponent } from './date/date.component';
import { DurationComponent } from './duration/duration.component';

@NgModule({
  declarations: [CourseListComponent, CourseItemComponent, SearchComponent, DateComponent, DurationComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    DirectivesModule,
    CoreModule,
  ],
  exports: [
    CourseListComponent,
    SearchComponent,
  ]
})
export class CourseListModule { }
