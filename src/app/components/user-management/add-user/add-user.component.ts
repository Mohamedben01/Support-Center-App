import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm!: FormGroup;
  error!: string;
  loading = false;
  submitted = false;
  roles: any = [{id: 1, name: "Admin"},{id: 2, name: "Technician"}, {id: 3, name: "Guest"}]
  user!: any;
  message : string = '';
  msgColor! : string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServiceService,
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      phone: ['', [Validators.required, Validators.pattern('(\\+212|0)([\\-_/]*)(\\d[\\-_/]*){9}')]],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      roles: [null, Validators.required]
  })
  }

  get f(){ return this.userForm.controls;}

  onAddUser(){

    this.submitted = true;

    var objrole = {
      "roles" : this.roles.filter((role: any) => role.id == +this.f.roles.value)
    }
    this.user= Object.assign(this.userForm.value, objrole)
    console.log(this.user)
    if (this.userForm.invalid) {
      return;
    }

    this.loading = true;
    const msgBox = document.querySelector('.message');
    this.userService.addUser(this.user)
    .subscribe(
        data => {
        this.loading = false;
        this.message = "User is Added Successfully";
        this.msgColor = 'Green';
        msgBox?.classList.add('active');
        setTimeout(()=>{msgBox?.classList.remove('active')},4500);
      },
      error => {
        this.loading = false;
        this.message = error.error.message;
        this.msgColor = 'Red';
        msgBox?.classList.add('active');
        setTimeout(()=>{msgBox?.classList.remove('active')},4500);
      });
  }
}