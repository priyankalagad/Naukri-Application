
import { Component } from '@angular/core';
import { RecruiterserviceService } from '../recruiterservice.service';


@Component({
  selector: 'app-recruiter-login',
  templateUrl: './recruiter-login.component.html',
  styleUrls: ['./recruiter-login.component.css']
})
export class RecruiterLoginComponent {

  username:string='';
  email:string='';
  Mobile: string ='';
  errorMessage: string ='';
  successMessage: string ='';

  constructor(private RecruiterserviceService: RecruiterserviceService){}

  onSubmit()
  {
    const recruiterData={
      username:this.username,
      mobile:this.Mobile,
      email: this.email
    };

    this.RecruiterserviceService.registerRecruiter(recruiterData).subscribe(
      (response: any) => {
        console.log('Data successfully sent to backend:', response);
        this.successMessage = 'Registration successful! Your password is: ' + response.password;
        this.errorMessage = ''; 
      }, 
      error => {
        console.error('Error occurred while sending data:', error);
        this.successMessage = ''; // Clear success message on error

        // Error handling
        if (error.status === 409) {
          if (error.error === 'Error: Email already exists') {
            console.error('Error: Email already exists!');
            this.errorMessage = 'Email already exists!';
          } else if (error.error === 'Error: Mobile already exists') {
            console.error('Error: Mobile number already exists!');
            this.errorMessage = 'Mobile number already exists!';
          } else {
            console.error('Error: Duplicate entry detected with a different message:', error.error);
            this.errorMessage = 'Duplicate entry detected.';
          }
        } else {
          console.error('Error occurred while submitting form:', error);
          this.errorMessage = 'An error occurred. Please try again.';
        }
      }
    );
  }
  }
