import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { MoviesService } from '../movies/movies.service'
import { FavoritesService } from '../favorites/favorites.service'
import { Movie } from '../movie/movie.model'

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie

  constructor(
    private moviesService: MoviesService,
    private favoritesService: FavoritesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.moviesService.movieById(this.route.snapshot.params['id'])
      .subscribe(movie => this.movie = movie)
  }

  addToFavorites() {
    this.favoritesService.addToFavorites(this.movie)
  }

}
