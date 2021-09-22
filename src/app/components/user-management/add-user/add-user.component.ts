import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
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

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: ['', [Validators.required, Validators.pattern('(\\+212|0)([\\-_/]*)(\\d[\\-_/]*){9}')]],
      username: ['', Validators.required],
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
    this.userService.addUser(this.user)
    .subscribe(
        data => {
        this.loading = false;
        this.router.navigate(["/user/management"])
      },
      error => {
        this.loading = false;
        this.error = error.error.message;
    });
  }
}