import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";
import { LogincustomService } from "./logincustom.service";
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    public logincustomService:LogincustomService
  ) { }
  canActivate():boolean{
    return this.logincustomService.isAuthenticated();
  }
}
