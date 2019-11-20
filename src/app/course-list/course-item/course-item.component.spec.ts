import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = {
      id: 1,
      title: "Course1",
      creationDate: new Date(),
      duration: 88,
      description: "Description for course 1"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title correctly', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('#title').textContent).toContain(component.course.title);
  });

  it('should display duration correctly', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('#duration').textContent).toContain(component.course.duration);
  });

  xit('should display creationDate correctly', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('#date').textContent)
    .toContain((component.course.creationDate));
  });

  it('should display description correctly', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('#description').textContent)
    .toContain((component.course.description));
  });
});
