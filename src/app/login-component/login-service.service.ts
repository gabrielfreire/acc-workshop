import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginServiceService {

	
  constructor(private http: Http) { }

  login(data){
  	return this.http.post("/login", data);
  }

}
