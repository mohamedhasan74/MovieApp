import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movie.service';
import { Movie } from '../Models/movie';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit{
  
  movieId! : string | null;
  movie!:Movie;
  posterPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private _MovieService:MovieService, private _ActivateRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._ActivateRoute.paramMap.subscribe((response)=>{
      this.movieId = response.get("id")
    })
    this._MovieService.getById(this.movieId).subscribe({
      next:(response)=> {
        this.movie = response;
      }
    })
  }

}
