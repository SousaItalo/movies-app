import { Component, OnInit } from '@angular/core';


import { Movie } from '../movie/movie.model';
import { FavoritesService } from './favorites.service'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  movies: Movie[]

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.movies = this.favoritesService.getFavorites()
  }

}
