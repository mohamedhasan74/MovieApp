import { Component, Input, OnChanges } from '@angular/core';
import { Movie } from 'src/app/Models/movie';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input() allMovies: Movie[] = [];
  filmName: string = "";
  notFoundItem = false;
  posterPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private _MovieService: MovieService) {

  }
  do(data: any) {
    if(this.filmName !== ""){
      this._MovieService.search(this.filmName).subscribe({
        next:(response)=>{
          if(response.length > 0)
          {
            this.allMovies = response
            this.notFoundItem = false;
          }
          else this.notFoundItem = true;
        }
      })
    }else {
      this._MovieService.getPopularMovies().subscribe({
        next:(response)=>{
          this.allMovies = response
        }
      })
    }
  }
}
