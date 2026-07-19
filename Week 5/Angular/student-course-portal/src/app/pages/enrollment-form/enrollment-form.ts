import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './enrollment-form.html',
  styleUrls: ['./enrollment-form.css']
})
export class EnrollmentFormComponent {

  submitted = false;

  student = {
    studentName: '',
    studentEmail: '',
    courseId: null,
    preferredSemester: '',
    agreeToTerms: false
  };

  onSubmit(form: NgForm) {

    console.log('Form Values');

    console.log(form.value);

    console.log('Form Valid:', form.valid);

    if(form.valid){
      this.submitted = true;
    }

  }

}