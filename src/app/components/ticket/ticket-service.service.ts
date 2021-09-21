import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  token : any = localStorage.getItem("token");

  constructor(private http: HttpClient) { }


  /* ==========================Guest Methods============================ */

   getGuestTickets(){
    const headers = { 'Authorization': this.token};
    return this.http.get<any>(`${environment.baseUrl}/api/ticket/all`, {headers});
  }

  addTicket(ticket : any): Observable<any>{    
    const headers = { 'Authorization': this.token};
    console.log(`${environment.baseUrl}/api/ticket/add`, ticket, {headers})
    return this.http.post<any>(`${environment.baseUrl}/api/ticket/add`, ticket, {headers});
  }

  getTicketById(id: number){
    const headers = { 'Authorization': this.token};
    return this.http.get<any>(`${environment.baseUrl}/api/ticket/get`,
                               {
                                 headers,
                                 params: new HttpParams().set('ticketId', id),
                               }, 
                              );
  }

  deleteTicket(id: number){
    const headers = { 'Authorization': this.token};
    return this.http.delete(`${environment.baseUrl}/api/ticket/delete`,{
                            headers,
                            params: new HttpParams().set('ticketId', id),
                        },
                    );
  }



   /* =========================Technician Methods====================== */

   getUnAssignTickets(){
    const headers = {'Authorization': this.token};
    return this.http.get<any>(`${environment.baseUrl}/api/ticket/unassignTickets`, {headers});
   }

   getAssignTickets(){
     const headers = {'Authorization': this.token};
     return this.http.get<any>(`${environment.baseUrl}/api/ticket/assignTickets`, {headers});
   }

   assignOrUnassignTicketToTech(id: number){
     const headers = { 'Authorization': this.token};
     return this.http.get(`${environment.baseUrl}/api/ticket/assign`,{ 
                               headers,
                               params: new HttpParams().set("ticketId", id)
                             }
                          );
   }


   /* =========================Admin Part=========================== */
   getAllTickets(){
     const headers = { 'Authorization': this.token};
     return this.http.get(`${environment.baseUrl}/api/ticket/allTickets`,{headers});
   }

}
