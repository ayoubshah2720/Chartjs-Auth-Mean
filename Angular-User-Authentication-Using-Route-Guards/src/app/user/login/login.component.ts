import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
   arr1: any = [];
   alertmsg :any;

  constructor(
    private router: Router,
    private authService : AuthService,
    ) { }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  
  
  ngOnInit(): void {
  
  }
  
  logedIn(){
  let data = {
    email:this.loginForm.value.email,
    password:this.loginForm.value.password
  }
  this.authService.login(data).subscribe(res=>{
    if(res){
      this.router.navigate(['/home']);
      this.arr1.push(res);
      localStorage.setItem("logindata", JSON.stringify(this.arr1));
    }
  })
  }
}
