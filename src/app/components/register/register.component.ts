import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
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

    this.authService.register(this.registerForm.value)
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
