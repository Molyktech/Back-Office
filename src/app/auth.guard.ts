import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  currentUser:User
  privilege
  canActivate(route:ActivatedRouteSnapshot){
    this.currentUser=<User> JSON.parse(localStorage.getItem("currentUser"))
    this.privilege = this.currentUser.role.privileges.find(x=>{return x.name==route.data.title})
            if(this.privilege.read==true){
                return true
            }
            else{
                return false
            }
            // return true
  }
}
