import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user!: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {}
  
  register(user: User) {
    return this.http.post(`${environment.baseUrl}/api/auth/register`, user)
  }

  login(username: string, password: string){
    return this.http.post<any>(`${environment.baseUrl}/api/auth/login`, {username, password})
    .pipe(map
      ( data => {
           console.log(data);
           localStorage.setItem('username', username);
           localStorage.setItem('role', data.roles);
           localStorage.setItem('token', data.accessToken);
           return data;
          }
       )
    )
  }

  logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    this.router.navigate(["/login"]);
  }
}
