import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TvmazeService } from '../servicios/tvmaze.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.page.html',
  styleUrls: ['./seasons.page.scss'],
})
export class SeasonsPage implements OnInit {
  showId: number=0;
  seasons: any[] = [];

  constructor(private route: ActivatedRoute, private tvmazeService: TvmazeService, private router:Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.showId = +id;
    this.tvmazeService.getSeasons(this.showId).subscribe(
      response => {
        this.seasons = response;
      },
      error => {
        console.error('Error fetching seasons', error);
      }
    );
  } else {
    console.error('ID not found in route');
  }
}

onSelectSeason(seasonId: number) {
  this.router.navigate(['/episodes', seasonId]);
}

}
