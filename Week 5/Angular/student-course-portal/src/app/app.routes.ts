import { Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { StudentProfileComponent } from './student-profile/student-profile';

import { CourseListComponent } from './course-list/course-list';
import { CourseDetailComponent } from './pages/course-detail/course-detail';
import { CoursesLayoutComponent } from './layouts/courses-layout/courses-layout';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },

  {
    path:'profile',
    component:StudentProfileComponent
  },

  {
    path:'courses',
    component:CoursesLayoutComponent,

    children:[

      {
        path:'',
        component:CourseListComponent
      },

      {
        path:':id',
        component:CourseDetailComponent
      }

    ]
  },

  {
    path:'**',
    component:NotFoundComponent
  }

];