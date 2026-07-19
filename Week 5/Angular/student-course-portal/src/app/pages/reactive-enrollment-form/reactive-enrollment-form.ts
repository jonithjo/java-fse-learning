import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';


@Component({
  selector: 'app-reactive-enrollment-form',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl: './reactive-enrollment-form.html',

  styleUrl: './reactive-enrollment-form.css'
})


export class ReactiveEnrollmentForm {


  enrollForm!: FormGroup;



  constructor(private fb: FormBuilder) {


    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],


      studentEmail: this.fb.control(
        '',
        [
          Validators.required,
          Validators.email
        ],
        [
          this.simulateEmailCheck
        ]
      ),



      courseId: [
        '',
        [
          Validators.required,
          this.noCourseCode
        ]
      ],



      preferredSemester: [
        'Odd',
        Validators.required
      ],



      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],



      additionalCourses:
        this.fb.array([])

    });


  }




  // Custom synchronous validator
  // Blocks course codes starting with XX

  noCourseCode(
    control: AbstractControl
  ): ValidationErrors | null {


    if (
      control.value &&
      control.value.startsWith('XX')
    ) {


      return {
        noCourseCode: true
      };


    }


    return null;


  }






  // Custom Async Validator

  simulateEmailCheck(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {


    return new Promise((resolve) => {


      setTimeout(() => {


        if (
          control.value &&
          control.value.includes('test@')
        ) {


          resolve({
            emailTaken: true
          });


        }

        else {


          resolve(null);


        }


      }, 800);



    });



  }






get additionalCourses(): FormArray<FormControl> {

  return this.enrollForm.get(
    'additionalCourses'
  ) as FormArray<FormControl>;

}





  addCourse() {


    this.additionalCourses.push(

      new FormControl(
        '',
        Validators.required
      )

    );


  }






  removeCourse(index:number) {


    this.additionalCourses.removeAt(index);


  }






  submitForm() {


    console.log(
      "Form Value",
      this.enrollForm.value
    );


    // getRawValue includes disabled controls also

    console.log(
      "Raw Value",
      this.enrollForm.getRawValue()
    );


  }



}