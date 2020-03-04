import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../modules/movie';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  movieId: number;
  movies;
  
  constructor(private _http: MovieService,private route:ActivatedRoute) {
    this.route.params.subscribe(params => this.movieId = params.id)
  }
  
  ngOnInit():void {
    this._http.getPopular().subscribe((data => {
      this.movies = data;
    }))
  }
}
