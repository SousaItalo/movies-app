import { Injectable } from "@angular/core"
import { Http } from "@angular/http"
import { Location } from "@angular/common"

import { Observable, pipe } from "rxjs"
import { map, catchError } from "rxjs/operators"

import { ToastrService } from 'ngx-toastr';

import { MOVIE_API, API_KEY } from "../app.api"

import { Movie } from '../movie/movie.model'

@Injectable()
export class MoviesService {

  constructor(
    private http: Http,
    private toastr: ToastrService,
    private _location: Location ) {}

  movies(page: string, query: string) {
    if (query == '') {
      return this.discover(page)
    } else {
      return this.search(page, query)
    }
  }

  search(page: string, query: string): Observable<Movie[]> {
    console.log(query)
    return this.http.get(`${MOVIE_API}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`).pipe(
      map(response => response.json().results),
      catchError(error => {
        this._location.back()
        this.toastr.error('Unable to search, try again later')
        return Observable.throw(error.toString())
      })
    )
  }

  discover(page: string): Observable<Movie[]> {
    return this.http.get(`${MOVIE_API}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${page}`).pipe(
      map(response => response.json().results),
      catchError(error => {
        this.toastr.error('Verify your internet connection')
        return Observable.throw(error.toString())
      })
    )
  }

  movieById(id: string): Observable<Movie> {
    return this.http.get(`${MOVIE_API}/movie/${id}?api_key=${API_KEY}`).pipe(
      map(response => response.json()),
      catchError(error => {
        this._location.back()
        this.toastr.error('Error - Try again later')
        return Observable.throw(error.toString())
      })
    )
  }
}
