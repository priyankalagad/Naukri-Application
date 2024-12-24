import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent {
 
  @Output() logout =new EventEmitter<void>();
   
  onLogout(){
     this.logout.emit();
  }

}
