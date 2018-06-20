import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

import { Movie } from '../movie/movie.model'
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class FavoritesService {

  constructor(private toastr: ToastrService) {}

  addToFavorites(movie: Movie) {
    let favoriteMovies = this.getFavorites()

    if (!favoriteMovies.some(favMovie => favMovie.title == movie.title)) {
      favoriteMovies.push(movie)
      localStorage.setItem('favoriteMovies', JSON.stringify({favoriteMovies: favoriteMovies}))
      this.toastr.success('Movie added to favorites', 'SUCCESS');
    } else {
      this.toastr.warning('Already is a favorite');
    }
  }

  getFavorites(): Movie[] {
    let localStorageMovies = JSON.parse(localStorage.getItem('favoriteMovies'))
    if( localStorageMovies == null){
      return []
    } else {
      return localStorageMovies.favoriteMovies
    }
  }

}
