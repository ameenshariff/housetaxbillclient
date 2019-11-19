import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isUserValid(): boolean {
    const loggedInUser = sessionStorage.getItem("userName");
    if (loggedInUser!=null && localStorage.getItem("type")=="user") {
      return true;
    }
    else
      return false;
  }

  isAdminValid(): boolean {
    const loggedInAdmin = sessionStorage.getItem("adminName");
    if (loggedInAdmin!=null && localStorage.getItem("type")=="admin") {
      return true;
    }
    else
      return false;
  }

  constructor() { }
}
