import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses = [
    {
      id: 1,
      name: 'Angular Fundamentals',
      instructor: 'John Smith',
      duration: '6 Weeks'
    },
    {
      id: 2,
      name: 'React Essentials',
      instructor: 'Alice Johnson',
      duration: '5 Weeks'
    },
    {
      id: 3,
      name: 'Java Programming',
      instructor: 'David Wilson',
      duration: '8 Weeks'
    },
    {
      id: 4,
      name: 'Spring Boot',
      instructor: 'Emma Brown',
      duration: '7 Weeks'
    }
  ];

  getCourses() {
    return this.courses;
  }

  getCourseById(id: number) {
    return this.courses.find(course => course.id === id);
  }

}