import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecruiterserviceService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

registerRecruiter(data: any): Observable<any>{
  return this.http.post<any>(`${this.apiUrl}/post`, data);
}

submitOrderDeatils(data:any):Observable<any>{
  return this.http.post<any>(`${this.apiUrl}/api/orders`, data);
}

  }


