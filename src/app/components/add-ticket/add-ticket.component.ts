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
    openDate: new FormControl(),
    productId: new FormControl(),
    description: new FormControl()
  });


  constructor(private ticketService: TicketServiceService) { }

  ngOnInit(): void {
  }

  /* Create new ticket by guest */
  onAddTicket(){
    if(this.ticketForm.invalid){
      return
    }
    console.log(this.ticketForm.value);
    this.ticketService.addTicket(this.ticketForm.value).subscribe(
      ticket =>{
        console.log(ticket);
      },
      error=>{
        console.log("Error !!!");
      }
    )
  }
}
