import { Injectable } from "@angular/core"
import { Http } from "@angular/http"

import { Observable, pipe } from "rxjs"
import { map } from "rxjs/operators"

import { MOVIE_API } from "../app.api"
import { API_KEY } from "../app.api"

import { Movie } from '../movie/movie.model'

@Injectable()
export class MoviesService {

  constructor(private http: Http) {}

  movies(page: string, query: string) {
    if (query == '') {
      return this.discover(page)
    } else {
      return this.search(page, query)
    }
  }

  search(page: string, query: string) {
    console.log(query)
    return this.http.get(`${MOVIE_API}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`).pipe(
      map(response => response.json().results)
    )
  }

  discover(page: string) {
    return this.http.get(`${MOVIE_API}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${page}`).pipe(
      map(response => response.json().results)
    )
  }

  movieById(id: string): Observable<Movie> {
    return this.http.get(`${MOVIE_API}/movie/${id}?api_key=${API_KEY}`).pipe(
      map(response => response.json())
    )
  }
}
