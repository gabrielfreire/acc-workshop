import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { LoginServiceService } from './login-component/login-service.service';
import { CvComponentComponent } from './cv-component/cv-component.component';
import { CvUploaderService } from './cv-component/cv-uploader.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    CvComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginServiceService, CvUploaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
