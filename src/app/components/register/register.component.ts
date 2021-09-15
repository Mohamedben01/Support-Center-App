import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User;
  registerForm!: FormGroup;
  error!: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService  
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f(){ return this.registerForm.controls;}

  onSubmit(){
    if (this.registerForm.invalid) {
        return;
    }
    this.user.firstName = this.f.firstname.value;
    this.user.lastName = this.f.lastname.value;
    this.user.email = this.f.email.value;
    this.user.userName = this.f.username.value;
    this.user.password = this.f.password.value;

    this.authService.register(this.user)
    .pipe(first())
    .subscribe(
        data => {
          console.log('Registration successful');
            this.router.navigate(['../login']);
        },
        error => {
          console.log("Error !!!");
          this.error = "Required Field";
        });
  }
}
