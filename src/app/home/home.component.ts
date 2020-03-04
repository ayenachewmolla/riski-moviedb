import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../modules/movie';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  result
  constructor(private _http: MovieService) { }

  ngOnInit() {
  }
  search(name:string):void{
    this._http.getSearch(name).subscribe(data => {
      this.result = data;
      console.log(this.result);
      
    })
  }
}
