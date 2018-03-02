import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  register(user, callback) {

    this._http.post('/register', user)
      .subscribe(data => callback(data));
  }

  login(user, callback) {

    this._http.post('/login', user)
      .subscribe(
        data => callback(data),
        err => callback(err)
      );
  }

  session(callback) {
    this._http.get('/session')
      .subscribe(data => callback(data));
  }

  logout() {
    this._http.get('/logout').subscribe();
  }
}
