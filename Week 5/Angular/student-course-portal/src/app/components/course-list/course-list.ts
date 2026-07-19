import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CourseService } from '../services/course-service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {

  private courseService = inject(CourseService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  courses: any[] = [];

  searchTerm = '';

  ngOnInit(): void {

    this.courses = this.courseService.getCourses();

    this.searchTerm =
      this.route.snapshot.queryParamMap.get('search') || '';

  }

  viewCourse(course: any) {

    this.router.navigate(['courses', course.id]);

  }

  searchCourses() {

    this.router.navigate(
      ['courses'],
      {
        queryParams: {
          search: this.searchTerm
        }
      }
    );

  }

}