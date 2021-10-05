import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: any = [];
  message !: string ;
  message1 : string = ''
  msgColor : string = '';
  userId !: number;


  constructor(private route: ActivatedRoute, private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.allUsers();
  }

  allUsers(){
    this.userService.getAllUsers().subscribe( data => { this.users = data })
  }
  deleteUser(id: any){
    this.userService.getUser(id).subscribe(
      data => {this.message = 'Are you sure about deleting user named '+data.userName+' ?'}
      )
    const deleteBtn = document.querySelector('.content');
    const cart = document.querySelector('.cart');
    cart?.classList.add('show');
    deleteBtn?.classList.add('active');
    this.userId = id;
  }

  confirmDelete(){
    const msgBox = document.querySelector('#message1');
    this.userService.deleteUser(this.userId).subscribe(      
      response =>{
        this.cancelDelete();
        this.allUsers();
        this.message1 = "User Deleted Successfully.";
        this.msgColor = 'Green';
        msgBox?.classList.add('active'); 
        setTimeout(()=>{msgBox?.classList.remove('active')},5000);
      },
      error =>{
        this.message1 = "Operation Failed, please try again.";
        this.msgColor = 'Red';
        msgBox?.classList.add('active'); 
        setTimeout(()=>{msgBox?.classList.remove('active')},5000);
        this.cancelDelete();
      }
    )
  }

  cancelDelete(){
    const deleteBtn = document.querySelector('.content');
    const cart = document.querySelector('.cart');
    cart?.classList.remove('show');
    deleteBtn?.classList.remove('active');
  }
}
