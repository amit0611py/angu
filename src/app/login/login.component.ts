import { RegistrationService } from './../registration.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { error } from '@angular/compiler/src/util';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  loginUser(): void {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/loginsuccess'])
      },
      error => {
        console.log("exception occured");
        this.msg = "Bad credential, please enter valid emailid and password";
      }
    )
  }

}
