import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public search = "";

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  searching() {
    console.log(this.search);
  }

  addCourse() {
    this.router.navigate(['courses/','new']);
  }

}
