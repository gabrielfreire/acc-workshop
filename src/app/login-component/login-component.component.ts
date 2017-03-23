import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'login-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {


	user = {
		username: String,
		password: String
	};	
  constructor(private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  login(){
  	
  }

}
