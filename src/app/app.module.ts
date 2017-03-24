import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.route';
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
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes, { useHash: true })
  ],
  providers: [LoginServiceService, CvUploaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
