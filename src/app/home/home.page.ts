import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private userService:UserService, private router: Router) {}
  

  Login(email:any, password:any){
    this.userService.login(email.value, password.value).subscribe({
      next:(data:any)=>{
        localStorage.setItem('user', data.dataUser.user);
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.dataUser.id);
        this.router.navigateByUrl('/principal');
      },
      error:(error)=>{
        debugger
      }
    })
  }
}

