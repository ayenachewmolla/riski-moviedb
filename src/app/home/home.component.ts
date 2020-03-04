import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../modules/movie';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  result;
  errmsg = '';
  isLoad = false;
  loadingmsg = 'Loading...';
  popular = true
  constructor(private _http: MovieService) { }

  ngOnInit() {

  }

  search(name: string): void {
    this.isLoad = true;
    this.errmsg = '';

    this._http.getSearch(name).subscribe(data => {
      this.result = data;
      if (this.result.results.length === 0) {
        this.errmsg = "Not Found";
      }
    })
    this.isLoad = false
    this.popular = false
  }
  togglePopular() {
    this.popular = !this.popular
  }
}
