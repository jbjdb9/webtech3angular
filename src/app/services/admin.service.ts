import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8000/api/admin';  

  constructor(private http: HttpClient) { }

  getAggregateData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/aggregate`);
  }

  getPlayers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/players`);
  }

  getAggregatedByDate(): Observable<any> {
    return this.http.get(`${this.apiUrl}/dates`);
  }
}