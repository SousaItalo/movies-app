import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

import { Movie } from '../movie/movie.model'

@Injectable()
export class FavoritesService {

  constructor() {}

  addToFavorites(movie: Movie) {
    let favoriteMovies = this.getFavorites()
    console.log(favoriteMovies)
    favoriteMovies.push(movie)
    localStorage.setItem('favoriteMovies', JSON.stringify({favoriteMovies: favoriteMovies}))
  }

  getFavorites(): Movie[] {
    let localStorageMovies = JSON.parse(localStorage.getItem('favoriteMovies'))
    if( localStorageMovies == null){
      console.log("NULL")
      return []
    } else {
      console.log("FULL")
      return localStorageMovies.favoriteMovies
    }
  }

}
