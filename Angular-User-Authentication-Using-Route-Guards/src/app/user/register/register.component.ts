import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_Services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  arr:any = [];

  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  collectData(){
    console.log(this.registerForm.value);
    this.arr.push(this.registerForm.value)
    localStorage.setItem("formdata", JSON.stringify(this.arr));
    this.registerForm.reset();
  }
  

  constructor(
    private authService : AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registerUser(){
    console.log(this.registerForm.value);
    this.arr.push(this.registerForm.value)
    localStorage.setItem("formdata", JSON.stringify(this.arr));
    let data = this.registerForm.value
    this.authService.register(data).subscribe(res=>{
      console.log('response',res)
    })
    this.registerForm.reset();
    this.router.navigate(['/login'])
  }
}
