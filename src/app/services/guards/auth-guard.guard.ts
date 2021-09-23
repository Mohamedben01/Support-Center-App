import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService){}
 
  role = localStorage.getItem('role');
  jwtToken = localStorage.getItem('token');

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
      if(this.jwtToken !== null){
        return true;
      }
      localStorage.clear();
      this.router.navigate(["/login"]);
      return false;
  }
canActivateChild(): boolean{
    if(this.jwtToken !== null && this.role === 'Admin'){
      return true;
    }
    this.router.navigate(["/login"]);
      return false;
}
  



}

