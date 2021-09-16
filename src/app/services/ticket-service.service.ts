import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  token : any = localStorage.getItem("token");

  constructor(private http: HttpClient) { }

  getGuestTickets(){
    const headers = { 'Authorization': this.token};
    return this.http.get<any>(`${environment.baseUrl}/api/ticket/all`, {headers});
  }

  addTicket(ticket : any): Observable<any>{    
    const headers = { 'Authorization': this.token};
    console.log(`${environment.baseUrl}/api/ticket/add`, ticket, {headers})
    return this.http.post<any>(`${environment.baseUrl}/api/ticket/add`, ticket, {headers});
  }
}
