import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
   ) { }

  Base_URL = environment.BASE_URL

  register(data:any) {
    var headers_object = new HttpHeaders();
        headers_object.append('Content-Type', 'application/json');
        // headers_object.append("Authorization", "Bearer " + t);

        const httpOptions = {
          headers: headers_object
        };
    return this.http.post(this.Base_URL+"/register",data,httpOptions);
  }

  login(data:any) {
    var headers_object = new HttpHeaders();
        headers_object.append('Content-Type', 'application/json');
        // headers_object.append("Authorization", "Bearer " + t);

        const httpOptions = {
          headers: headers_object
        };
    return this.http.post(this.Base_URL+"/login",data,httpOptions);
  }
}
