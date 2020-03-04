import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from './modules/movie';
import { HistoryService } from './history.service';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  apiKey = 'e63c75b1b6d500cd283f542e8e1ed2da';
  url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query`;

  constructor(
    private http: HttpClient,
    private historyService: HistoryService
  ) { }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`)
  }

  getSearch(searchQuery: string): Observable<Movie[]> {
    this.historyService.addHistory({title: searchQuery, date: new Date().toLocaleString()})
    return this.http.get<Movie[]>(`${this.url}=${searchQuery}`);
  }



}
