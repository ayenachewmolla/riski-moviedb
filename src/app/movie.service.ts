import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from './modules/movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  apiKey = 'e63c75b1b6d500cd283f542e8e1ed2da';
  url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=Jack+Reacher`;
  constructor(private http: HttpClient) { }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.url}/${id}`)

  }
}
