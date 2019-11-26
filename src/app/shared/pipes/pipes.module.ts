import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTimePipe } from './my-time.pipe';
import { OrderByPipe } from './order-by.pipe';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [MyTimePipe, OrderByPipe, FilterPipe],
  imports: [
    CommonModule
  ],
  exports: [MyTimePipe, OrderByPipe, FilterPipe]
})
export class PipesModule { }
