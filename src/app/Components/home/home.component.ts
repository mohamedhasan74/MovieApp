import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/movie';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allMovies: Movie[] = [];
  p: number = 1;
  constructor(private _Movie: MovieService) { }
  ngOnInit(): void {
    this.getMoviesPerPage(this.p);
  }
  getMoviesPerPage(pageId:number) {
    this._Movie.getPopularMovies(pageId).subscribe({
      next: (response) => {
        console.log(response)
        this.allMovies = response;
      }
    })
  }
  done(data: any) {
    this.p = data;
    this.getMoviesPerPage(this.p);
  }

}
