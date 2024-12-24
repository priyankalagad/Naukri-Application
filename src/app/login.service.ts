import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(data: { username: string; password: string }) {
    return this.http.post('http://localhost:8080/api/login1', data);
  }
  
}
