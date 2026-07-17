import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Vital for two-way binding [(ngModel)]

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule], // No CommonModule needed because we use @if blocks!
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  // Task 1 Properties
  portalName: string = 'Student Course Portal';
  isPortalActive: boolean = true;
  message: string = '';
  searchTerm: string = '';

  // Task 2: Track course counts
  availableCoursesCount: number = 0;

  // Task 2: ngOnInit Hook
  ngOnInit(): void {
    this.availableCoursesCount = 15; // Simulating data fetch setup
    console.log('HomeComponent initialised — courses loaded. Count: ' + this.availableCoursesCount);
  }

  // Task 1: Event Binding Handler
  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  // Task 2: ngOnDestroy Hook
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }
}