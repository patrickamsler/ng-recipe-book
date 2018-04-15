import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loadedFeature: string = 'recipes';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBYfK8C9MEasCS_eeVUhRvvRKC2rHDgAcw",
      authDomain: "ng-recipe-book-c95c7.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
