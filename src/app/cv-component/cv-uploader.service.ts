import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class CvUploaderService {

  constructor(private http: Http) { }

  cvUpload(data){
    const cvUploaderUrl = "8cf09171.ngrok.io/CV";
  	return this.http.post(cvUploaderUrl, data);
  }
}
