import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvmazeService } from '../servicios/tvmaze.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

  seasonId: number=0;
  episodes: any[] = [];

  constructor(private route: ActivatedRoute, private tvmazeService: TvmazeService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.seasonId = +id;
      this.tvmazeService.getEpisodes(this.seasonId).subscribe(
        response => {
          this.episodes = response;
        },
        error => {
          console.error('Error fetching episodes', error);
        }
      );
    } else {
      console.error('ID not found in route');
    }
  }

}
