import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class CvUploaderService {

  constructor(private http: Http) { }

  cvUpload(data): Observable<Response>{
    const cvUploaderUrl = "/CV";
  	return this.http.post(cvUploaderUrl, data);
  }
}
