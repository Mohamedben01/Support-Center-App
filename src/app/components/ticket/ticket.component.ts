import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  user_role: any = localStorage.getItem('role');
  
  constructor() { }

  ngOnInit(): void {
    this.user_role;
  }

  
}
