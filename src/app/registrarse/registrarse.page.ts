import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  private router=inject(Router)
private usuarioService=inject(UserService)
  ngOnInit() {
  }
  registrar(user:any,email:any,password:any){
    this.usuarioService.register(user.value,email.value,password.value).subscribe({
      next:(dato:any)=>{
        localStorage.setItem('user',dato.users.user)
        localStorage.setItem('token',dato.token)
        localStorage.setItem('id',dato.users.id)

        if(dato){
          this.router.navigateByUrl('/')
        }
        console.log(dato)
      },error:(err)=>{
console.log(err)
      }
    })
  }

}
