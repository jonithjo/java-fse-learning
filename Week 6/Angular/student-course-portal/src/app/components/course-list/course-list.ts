import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { CourseCardComponent } from '../course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCardComponent
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {

  isLoading = true;

  courses: Course[] = [
    {
      id: 1,
      name: 'Java',
      trainer: 'John',
      credits: 4,
      enrolled: true,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Python',
      trainer: 'David',
      credits: 3,
      enrolled: false,
      gradeStatus: 'failed'
    },
    {
      id: 3,
      name: 'Angular',
      trainer: 'Sam',
      credits: 1,
      enrolled: true,
      gradeStatus: 'pending'
    }
  ];

  ngOnInit(): void {

    setTimeout(() => {
      this.isLoading = false;
    },1500);

  }

  // trackBy improves performance by updating only changed items.
  trackByCourseId(index:number,course:Course){
    return course.id;
  }

}