import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User> {
    return this.http.get<User>(`${environment.baseUrl}/api/management/all`);
  }
  getUser(id: any): Observable<User> {
    return this.http.get<User>(`${environment.baseUrl}/api/management/edit/`+ id);
  }
  saveUser(user: any) {
    return this.http.put<any>(`${environment.baseUrl}/api/management/save`, user);
  }
  deleteUser(id: any) {
    return this.http.delete<any>(`${environment.baseUrl}/api/management/delete/`+ id);
  }
  addUser(user: any){
    return this.http.post<any>(`${environment.baseUrl}/api/management/adduser`, user);
  }
}
