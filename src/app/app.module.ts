import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { RecruiterLoginComponent } from './recruiter-login/recruiter-login.component';
import { FindemailComponent } from './findemail/findemail.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StudentLoginComponent,
    RecruiterLoginComponent,
    FindemailComponent,
    StudentdashboardComponent,
    MenuComponent,
    OrderComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    MenuBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
