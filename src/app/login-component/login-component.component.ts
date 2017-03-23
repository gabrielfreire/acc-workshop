import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  errorMessage = false;
  isAuthenticated = false;
	user = {
		username: String,
		password: String
	};	
  constructor(private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  login(){
  	this.loginService.login(this.user).subscribe((user) => {
      this.isAuthenticated = true;
    }, (err) => {
      this.errorMessage = true;
    })
  }

}
