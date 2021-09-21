import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketServiceService } from '../ticket-service.service';

@Component({
  selector: 'app-explore-ticket',
  templateUrl: './explore-ticket.component.html',
  styleUrls: ['./explore-ticket.component.css']
})
export class ExploreTicketComponent implements OnInit {


  ticketId !: any ;
  ticket !: any;
  loading : boolean = false;
  constructor(private route: ActivatedRoute,
              private ticketService: TicketServiceService) { }

  ngOnInit(): void {
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
        console.log(data);
      },
      error =>{
        this.loading = false;
      }
    )
  }
  
}
