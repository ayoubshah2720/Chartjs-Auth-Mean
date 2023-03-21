import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project1';
  faCoffee = faCoffee;
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.isLoggedIn = (localStorage.getItem('logindata') != null) ? true : false;
  }

  logOut(){
     this.router.navigate(['/login'])
     localStorage.removeItem("logindata");
  }
}
