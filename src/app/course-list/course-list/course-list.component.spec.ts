import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain courses', () => {
    expect(component.courseItems.length).toBeGreaterThan(0);
    expect(component.courseItems.length).toEqual(4);
  });

  it('first element has correct data', () => {
    expect(component.courseItems[0].id).toEqual(1);
    expect(component.courseItems[0].title).toEqual('Course1');
    expect(component.courseItems[0].description).toEqual('Description for course 1');
    expect(component.courseItems[0].duration).toEqual(88);
  });
});
