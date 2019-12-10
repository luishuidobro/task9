import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcumbsComponent, NotFoundComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    BreadcumbsComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
  ]
})
export class CoreModule { }
