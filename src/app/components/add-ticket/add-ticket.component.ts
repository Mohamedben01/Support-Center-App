import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TicketServiceService } from 'src/app/services/ticket-service.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  ticketForm: FormGroup = new FormGroup({
    status : new FormControl(),
    opendate: new FormControl(),
    product: new FormControl(),
    description: new FormControl()
  });


  constructor(private ticketService : TicketServiceService) { }

  ngOnInit(): void {
  }

  onAddTicket(){
    console.log(this.ticketForm.value);
  }
}
