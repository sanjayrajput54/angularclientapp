import { Component, OnInit } from '@angular/core';
import {LoginService} from './../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
   private user: any = {};
  constructor(private loginService: LoginService,private router:Router) {

   }

  ngOnInit() {
  }

  clickToLogin(inputUser) {
    let userField = {
      email: inputUser.email,
      password: inputUser.password
    }
   this.loginService.login(userField).subscribe((res)=>{
     localStorage.setItem("token", res.token);
     this.router.navigate(['/Home']);
     console.log(res);
   });
  }
}
