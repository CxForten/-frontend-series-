import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(email:string, password:string){
    let datos = {
      email: email,
      password: password
    }
    return this.http.post('http://localhost:3000/api/login',datos);
  }

  register(user:any, email:any, password:any ){
    let datos = {
      user: user,
      email: email,
      password: password
    }
    return this.http.post('http://localhost:3000/api/register',datos);
  }

  getUser(){
    const header = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get('http://localhost:3000/api/user', {headers:header});
  }

  deleteUser(id:number){
    const header = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.delete('http://localhost:3000/api/user/'+id, {headers:header});
  }
 }
