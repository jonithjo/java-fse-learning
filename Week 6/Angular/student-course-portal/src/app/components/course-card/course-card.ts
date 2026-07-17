import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

// Strong type declaration for our expected course data structure
export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
}

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent implements OnChanges {
  // Task 3: Typed input boundary channel
  @Input({ required: true }) course!: Course;

  // Task 3: Strongly typed Output custom event transmitter
  @Output() enrollRequested = new EventEmitter<number>();

  // Task 2: ngOnChanges log analyzer
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      const prev = changes['course'].previousValue;
      const current = changes['course'].currentValue;
      
      console.log(`CourseCard [ID: ${current?.id}] Input Shift Detected:`, {
        previousValue: prev,
        currentValue: current
      });
    }
  }

  // Intercepting UI click to broadcast to parent listener
  onEnrollBtnClick(): void {
    this.enrollRequested.emit(this.course.id);
  }
}