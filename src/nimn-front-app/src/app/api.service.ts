import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';

const HttpOptions = {
  headers: new HttpHeaders({
    'Contant-Type': 'application/json',
    'Access-Control-ALlow-Headers': 'Content-Type'
   })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  registerUser(user){
    this.http.post('http://localhost:3000/users', user , HttpOptions).subscribe(res => {
      console.log(res);

    })

  }
}
