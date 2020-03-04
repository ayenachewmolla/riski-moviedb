import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../modules/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieId: number;
  movie: Movie;
  
  constructor(private _http: MovieService,private route:ActivatedRoute) {
    this.route.params.subscribe(params => this.movieId = params.id)
  }
  
  ngOnInit():void {
    this._http.getMovie(this.movieId).subscribe((data => {
      this.movie = data;
      console.log(this.movie);
      
    }))
  }
  

}
