import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcumbsComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    BreadcumbsComponent,
    FooterComponent,
    HeaderComponent,
  ]
})
export class CoreModule { }
