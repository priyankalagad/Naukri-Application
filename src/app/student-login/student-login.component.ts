import { Component,EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string= '';

  constructor (private http: HttpClient,private router:Router){}
      currentComponent: string='';
      
      @Output() loginSuccess = new EventEmitter<void>();

      isLoggedIn: boolean=false;
       
      onLoginSuccess(){
        this.isLoggedIn = true;
      }

        onSubmit(){
          console.log('Username/Email/Mobile:', this.username);
          console.log('Password:', this.password);

          const loginData ={
           username:this.username,
           password: this.password
          };

          this.http.post<any>('http://localhost:8080/login',loginData,{headers: {'Content-Typex':'application/json'}
          }).subscribe(
            (response:any)=>{
              console.log('Login successful', response);
              alert('Login successful');
              this.loginSuccess.emit();
            },
            (error)=>{
                  console.error('Login failed',error);
                  this.errorMessage ='Invalid username or password';
            }
            );
        }


}
