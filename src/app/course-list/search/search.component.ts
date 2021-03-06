import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../../shared/models/course-model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, fromEvent, BehaviorSubject } from 'rxjs';
import { map, filter, distinctUntilChanged, debounceTime, switchMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  mySearch$ = new BehaviorSubject('');
  @Output() filteredCourses = new EventEmitter();
  public search ="";

  constructor(private readonly router: Router,
    private httpClient: HttpClient) {
      this.mySearch$.pipe(
      filter(text => !text || text.length > 3),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((search) => { 
        return this.httpClient.get<Course[]>('http://localhost:3004/courses/',
        {params: {textFragment: search}});
      })).subscribe(this.filteredCourses);
    }

  ngOnInit() {
  }

  addCourse() {
    this.router.navigate(['courses/','new']);
  }

}
