import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() mySearch = new EventEmitter();
  public search ="";

  constructor(private readonly router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
  }

  searching() {
    console.log(this.search);
    this.mySearch.emit(this.search);
  }

  addCourse() {
    this.router.navigate(['courses/','new']);
  }

}
