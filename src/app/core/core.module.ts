import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcumbsComponent, SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    BreadcumbsComponent,
    FooterComponent,
    HeaderComponent,
    SearchComponent,
  ]
})
export class CoreModule { }
