import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TicketServiceService } from '../ticket-service.service';
import { Ticket } from '../../../models/ticket';
@Component({
  selector: 'app-explore-ticket',
  templateUrl: './explore-ticket.component.html',
  styleUrls: ['./explore-ticket.component.css']
})
export class ExploreTicketComponent implements OnInit {


  userRole = localStorage.getItem('role');
  ticketId !: number ;
  ticket !: Ticket;
  message !: string;
  ticketStatus !: string;
  loading : boolean = false;
  
  constructor(private route: ActivatedRoute,
              private ticketService: TicketServiceService) {}

  ngOnInit(): void {
    this.userRole;
    this.getTicket();
  }

  getTicket(){
    this.loading = true;
    this.route.queryParams.subscribe(
      params =>{ 
        this.ticketId = params.id;
      }
    )
    
    this.ticketService.getTicketById(this.ticketId).subscribe(
      data =>{
        this.loading = false;
        this.ticket = data;        
      },
      error =>{
        this.loading = false;
        console.log(error.error.message);
      }
    )
  }
  
  /* Change Value of Ticket */
  changeTicketStatus(){
    console.log(this.ticketStatus);
    this.ticketService.changeTicketStatus(this.ticketStatus, this.ticketId).subscribe(
      response =>{
        this.getTicket();
      },
      error =>{
        console.log("Operation Failed Status Doesn't Change It.")
      }
    )
  }

  /* Handling Changed Value */
  getMessage(msgText: string){
    this.message = msgText;
  }
  /* Sending Message By Current User */
  sendMessage(){
    this.ticketService.sendMsg(this.message, this.ticketId).subscribe(res=>{
      this.getTicket();
    },
    error=>{
      console.log("SomeThing went Wrong.")
    }
    )
  }


}
