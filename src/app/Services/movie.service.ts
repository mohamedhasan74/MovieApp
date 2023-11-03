import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs'
import { Movie } from '../Models/movie';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private API_KEY = "923d29f4e2bc2d80636bb469fb8abe61";
  private BASE_URL = "https://api.themoviedb.org/3";
  constructor(private _HttpClient: HttpClient) { }

  getPopularMovies(pageNumber: number = 1): Observable<Movie[]> {
    return this._HttpClient.get(`${this.BASE_URL}/movie/popular?api_key=${this.API_KEY}&page=${pageNumber}`)
      .pipe(
        map((response: any) => {
          return response.results
        })
      );
  }
  getById(movieId: string | null): Observable<Movie> {
    return this._HttpClient.get<Movie>(`${this.BASE_URL}/movie/${movieId}?api_key=${this.API_KEY}`)
  }
  search(query: string): Observable<Movie[]> {
    return this._HttpClient.get<Movie[]>(`${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&query=${query}`)
      .pipe(
        map((response: any) => {
          return response.results
        })
      );
  }
}
