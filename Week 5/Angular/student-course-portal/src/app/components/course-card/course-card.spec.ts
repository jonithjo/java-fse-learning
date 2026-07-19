import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCardComponent } from './course-card';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';


describe('CourseCardComponent', () => {

  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;


  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        CourseCardComponent
      ]

    }).compileComponents();


    fixture = TestBed.createComponent(CourseCardComponent);

    component = fixture.componentInstance;

  });



  it('should create', () => {

    expect(component).toBeTruthy();

  });


});