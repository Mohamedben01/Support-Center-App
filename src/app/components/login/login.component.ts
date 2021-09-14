import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  error!: string;


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activeRouter: ActivatedRoute,
              private authService: AuthService        
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  get f(){ return this.loginForm.controls;}


  onSubmit(){
    
    if(this.loginForm.invalid){
      return;
    }

    this.authService.login(this.f.username.value, this.f.password.value).subscribe(
      data => {
        this.router.navigate(['/user/ticket']);
      },
      error =>{
        console.log("Error !!!");
        this.error = "Invalid Password or Username";
      }
    )
  }
}
