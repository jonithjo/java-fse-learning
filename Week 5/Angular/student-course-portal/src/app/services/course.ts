import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Java',
      code: 'JAVA201',
      credits: 3,
      gradeStatus: 'pending'
    },
    {
      id: 3,
      name: 'Python',
      code: 'PY301',
      credits: 3,
      gradeStatus: 'passed'
    },
    {
      id: 4,
      name: 'Database',
      code: 'DB202',
      credits: 4,
      gradeStatus: 'failed'
    },
    {
      id: 5,
      name: 'Cloud',
      code: 'CL401',
      credits: 2,
      gradeStatus: 'pending'
    }
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(c => c.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

}