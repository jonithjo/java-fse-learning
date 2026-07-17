import { Component } from '@angular/core';
import { CourseCardComponent, Course } from '../course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseCardComponent], // Import child card component directly
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent {
  selectedCourseId: number | null = null;

  // Task 3: Array of 5 actual engineering subjects
  courses: Course[] = [
    { id: 401, name: 'Signals & Systems', code: 'ECE-401', credits: 4 },
    { id: 402, name: 'Digital Electronics', code: 'ECE-402', credits: 3 },
    { id: 403, name: 'Embedded Systems', code: 'ECE-403', credits: 4 },
    { id: 404, name: 'VLSI Design Technology', code: 'ECE-404', credits: 4 },
    { id: 405, name: 'Microcontrollers & IoT', code: 'ECE-405', credits: 3 }
  ];

  // Callback catching the output stream from the child card
  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}