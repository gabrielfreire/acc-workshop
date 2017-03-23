import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { CvComponentComponent } from './cv-component/cv-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    CvComponentComponent,
    FormBuilder
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
