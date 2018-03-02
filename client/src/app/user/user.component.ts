import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private user: any;
  private loggedIn: any;

  constructor(
    private us: UserService,
    private router: Router
  ) { }

  init() {
    this.user = {
      username: '',
      password: '',
      errors: []
    };
    this.loggedIn = {
      username: '',
      password: '',
      errors: ''
    };
  }

  ngOnInit() {
    this.init();
    this.us.logout();
  }

  register() {

    this.us.register(this.user, (data) => {
      if (data.errors) {
        const errs = [];

        for (const err of data.errors) {
          errs.push(data.errors[err]);
        }

        this.user.errors = errs;

      } else {
        this.init();
        this.router.navigate(['/questions']);
      }
    });
  }

  login() {

    this.us.login(this.loggedIn, (data) => {
      if (data.errors) {
        this.loggedIn.errors = data.errors;
        console.log(data.errors);
      } else {
        this.init();
        this.router.navigate(['/questions']);
      }
    });
  }
}
