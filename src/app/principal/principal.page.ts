import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../servicios/user.service';
import { TvmazeService } from '../servicios/tvmaze.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  datos:any;
  movies:any;
  query: string = '';
  shows: any[] = [];

  constructor(private router:Router,
    private userService:UserService,
    private tvmazeService: TvmazeService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/home')
  }

  getUsers(){
    this.userService.getUser().subscribe({
      next:(data:any)=>{
        this.datos = data.users
      },
      error:(error:any)=>{
        debugger
      }
    })
  }

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe({
      next:(data:any)=>{
       debugger
      },
      error:(error:any)=>{
        debugger
      }
    })
  }


  onSearch() {
    if (this.query.trim().length === 0) {
      return;
    }

    this.tvmazeService.searchShows(this.query).subscribe(
      response => {
        this.shows = response.map((result: any) => result.show);
      },
      error => {
        console.error('Error fetching shows', error);
      }
    );
  }

  onShowClick(showId: number) {
    this.router.navigate(['/seasons', showId]);
  }
  
}
