import { Component } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  
  currentComponent = ''; // Tracks the current component

  constructor(private router: Router) {}

  showLogin() {
    this.currentComponent = 'login';
  }

  showRegister() {
    this.currentComponent = 'register';
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

  onLoginSuccess() {
    this.currentComponent = 'isLoggedIn';
  }

  showWelcomePage() {
    this.currentComponent = ''; // Reset to welcome page
  }

  showAboutus() {
    this.currentComponent = 'aboutus'; // Reset to welcome page
  }

  showContactus() {
    this.currentComponent = 'contactus'; // Reset to welcome page
  }
  showAdmin() {
    this.currentComponent = 'login1'; // Reset to welcome page
  }
}