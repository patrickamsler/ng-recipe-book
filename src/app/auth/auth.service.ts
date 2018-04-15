import * as firebase from 'firebase';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  private token: string;

  constructor(private router: Router) {

  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getToken()
          .then(token => this.token = token);
      })
      .catch(error => console.log(error));
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken(): string {
    firebase.auth().currentUser.getToken()
      .then(token => this.token = token);
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
