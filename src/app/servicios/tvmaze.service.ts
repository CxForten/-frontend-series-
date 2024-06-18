import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService { 

  private apiUrl = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) { }

  searchShows(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search/shows?q=${query}`);
  }

  getSeasons(showId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/shows/${showId}/seasons`);
  }

  getEpisodes(seasonId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/seasons/${seasonId}/episodes`);
  }
}
