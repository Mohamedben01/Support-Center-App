import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userid!: any;
  user!: any;
  edituserForm!: FormGroup;
  submitted = false;
  loading = false;
  error!: string;
  roles: any = [{id: 1, name: "Admin"},{id: 2, name: "Technician"}, {id: 3, name: "Guest"}]

  constructor(
    private userService: UserServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {
    this.getUser();
    this.edituserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: ['', [Validators.required, Validators.pattern('(\\+212|0)([\\-_/]*)(\\d[\\-_/]*){9}')]],
      userName: ['', Validators.required],
      password: [null],
      roles: ['']
    });
  }

  get f(){ return this.edituserForm.controls;}

  getUser(){
    this.userid = +this.route.snapshot.paramMap.get("id")!;
    if(this.userid != 0){
      this.userService.getUser(this.userid).subscribe(
      data => {
      this.user = data;
      this.f.firstName.setValue(this.user.firstName);
      this.f.lastName.setValue(this.user.lastName);
      this.f.email.setValue(this.user.email);
      this.f.phone.setValue(this.user.phone);
      this.f.userName.setValue(this.user.userName);
      this.f.roles.setValue(this.user.roles[0].id)
    },
      error => {
        console.log(error.error.message);
      })
    }else{
      this.router.navigate(["/user/management"])
    }
  }

  saveUser(){
    var objid = {
      "id" : this.userid
     };
    var objrole = {
      "roles" : this.roles.filter((role: any) => role.id == +this.f.roles.value)
    }
    this.user = Object.assign(objid,this.edituserForm.value, objrole)

    this.submitted = true;
    if (this.edituserForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.saveUser(this.user).subscribe(
      user => this.user = user,
      error => {
        this.loading = false;
        this.error = error.error.message;
      });
    this.router.navigate(["/user/management"])
  }
}
