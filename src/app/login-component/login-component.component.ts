import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
		username:"",
		password:""
	};
  constructor(private loginService: LoginServiceService, 
              private router: Router) { }

  ngOnInit() {
  }

  login(){
  	this.loginService.login(this.user).subscribe((res) => {
      this.isAuthenticated = true;
      this.router.navigateByUrl('/cvs');
      console.log(this.user, res);
    }, (err) => {
      this.errorMessage = true;
      this.router.navigateByUrl('/cvs');
      console.log(err);
    })
  }

}
