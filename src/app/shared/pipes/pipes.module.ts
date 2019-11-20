import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTimePipe } from './my-time.pipe';
import { OrderByPipe } from './order-by.pipe';


@NgModule({
  declarations: [MyTimePipe, OrderByPipe],
  imports: [
    CommonModule
  ],
  exports: [MyTimePipe, OrderByPipe]
})
export class PipesModule { }
