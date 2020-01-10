import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ModelsComponent } from './models/models.component';
import { LoaderComponent } from './interceptors/loader/loader.component';

@NgModule({
  declarations: [ModelsComponent, LoaderComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  providers: [], 
  exports: [
    LoaderComponent
  ]
})
export class SharedModule { }
