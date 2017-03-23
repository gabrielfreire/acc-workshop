import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Rx } from 'rxjs';

@Injectable()
export class LoginServiceService {

  constructor(private http: Http) { }

  login(data): Observable<data>{
  	this.http.post("/login", data);
  }

}
