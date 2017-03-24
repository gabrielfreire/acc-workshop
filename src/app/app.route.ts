import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { CvComponentComponent } from './cv-component/cv-component.component';


export const AppRoutes: Routes = [
  {
    path: '',
    component: LoginComponentComponent
  }, {
    path: 'cvs',
    component: CvComponentComponent
  }
];
