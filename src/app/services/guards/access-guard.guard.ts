import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AccessGuardGuard implements CanActivate {

  token = localStorage.getItem("token");
  role = localStorage.getItem("role");

  constructor(private authService: AuthService){}

  canActivate(): boolean{ 
    
   if(this.role === 'Admin' && this.token !== null){
     return true;
   }
    this.authService.logout();
    return false;
   
 }


 canActivateChild(): boolean{
    if(this.token !== null && this.role === 'Admin'){
      return true;
    }
    this.authService.logout();
      return false;
}
  
}
