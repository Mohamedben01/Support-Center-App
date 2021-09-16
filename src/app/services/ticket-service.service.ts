import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  constructor(private http: HttpClient) { }

  getGuestTickets(){
    return this.http.get<any>(`${environment.baseUrl}/api/ticket/all`);
  }
}
