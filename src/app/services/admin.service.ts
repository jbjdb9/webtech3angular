import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8000/api/admin';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      throw new Error('JWT token not found');
    }
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getAggregateData(): Observable<any> {
    if (!this.authService.isAdmin()) {
      return throwError(() => new Error('Unauthorized: Only admins can access this data.'));
    }
    return this.http.get(`${this.apiUrl}/aggregate`, { headers: this.getHeaders() });
  }

  getPlayers(): Observable<any> {
    if (!this.authService.isAdmin()) {
      return throwError(() => new Error('Unauthorized: Only admins can access this data.'));
    }
    return this.http.get(`${this.apiUrl}/players`, { headers: this.getHeaders() });
  }

  getAggregatedByDate(): Observable<any> {
    if (!this.authService.isAdmin()) {
      return throwError(() => new Error('Unauthorized: Only admins can access this data.'));
    }
    return this.http.get(`${this.apiUrl}/dates`, { headers: this.getHeaders() });
  }
}