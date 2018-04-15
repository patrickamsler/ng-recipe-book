import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSingup(form: NgForm) {
    this.errorMessage = '';

    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }
}
