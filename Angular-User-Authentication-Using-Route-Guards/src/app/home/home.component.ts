import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;

constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = (localStorage.getItem('logindata') != null) ? true : false;
  }

  logOut(){
     this.router.navigate(['/login'])
     localStorage.removeItem("logindata");
  }
}
