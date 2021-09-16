import { Component, OnInit } from '@angular/core';
import { TicketServiceService } from 'src/app/services/ticket-service.service';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  user_role: any = localStorage.getItem('role');
  guest_tickets : any = [];
  token : any = localStorage.getItem("token");

  constructor(private ticketService: TicketServiceService) { }

  ngOnInit(): void {
    this.user_role;
    this.allGuestTickets();
  }

  /* Getting tickets of existing guest */
  allGuestTickets(){
    this.ticketService.getGuestTickets().subscribe(
      data => {
        console.log(data);
        this.guest_tickets = data;
      }, 
      error =>{
        console.log("There is no ticket  here !!!");
      }
    )
  }

}
