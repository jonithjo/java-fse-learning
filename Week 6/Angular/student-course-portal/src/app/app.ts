import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home';
import { CourseListComponent } from './components/course-list/course-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, CourseListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'student-course-portal';
}