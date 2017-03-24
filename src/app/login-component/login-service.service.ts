import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginServiceService {

	
  constructor(private http: Http) { }

  login(data): Observable<any>{
  	return this.http.post("https://8cf09171.ngrok.io/login", data);
  }

}
