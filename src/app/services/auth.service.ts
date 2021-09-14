import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}

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
