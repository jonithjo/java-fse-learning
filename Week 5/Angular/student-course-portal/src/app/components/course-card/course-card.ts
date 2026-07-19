import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { HighlightDirective } from '../../directives/highlight';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    CreditLabelPipe,
    HighlightDirective
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent {

  @Input() course!: Course;

  isExpanded = false;

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  // Keeps the template clean instead of writing
  // long ngClass conditions directly in HTML.
  get cardClasses() {
    return {
      'card--enrolled': this.course.enrolled,
      'card--full': (this.course.credits ?? 0) >= 4,
      'expanded': this.isExpanded
    };
  }

  get borderColor() {
    switch (this.course.gradeStatus) {
      case 'passed':
        return 'green';

      case 'failed':
        return 'red';

      default:
        return 'gray';
    }
  }

}