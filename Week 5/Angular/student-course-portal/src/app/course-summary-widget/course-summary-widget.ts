import { Component } from '@angular/core';
import { CourseService } from '../../services/course';

@Component({
  selector:'app-course-summary-widget',
  standalone:true,
  templateUrl:'./course-summary-widget.html'
})

export class CourseSummaryWidget{

count=0;

constructor(private courseService:CourseService){}

ngOnInit(){

this.count=this.courseService.getCourses().length;

}

}