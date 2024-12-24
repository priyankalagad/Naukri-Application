import { Component } from '@angular/core';

@Component({
  selector: 'app-findemail',
  templateUrl: './findemail.component.html',
  styleUrls: ['./findemail.component.css']
})
export class FindemailComponent {

  username: string = '';


  searchEmail() {
   
    console.log('Searching for email for username:', this.username);
  }

}
