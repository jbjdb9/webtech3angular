import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8000/api/login_check';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(this.loginUrl, { username, password }, { responseType: 'text' }).subscribe(token => {
      localStorage.setItem('jwtToken', token);
    });
  }

  decodeJWTToken(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
  }

  isAdmin(): boolean {
    const token = localStorage.getItem('jwtToken');
    if (!token) return false;
  
    const decoded = this.decodeJWTToken(token);
    return decoded.roles && decoded.roles.includes('ROLE_ADMIN');
  }

}