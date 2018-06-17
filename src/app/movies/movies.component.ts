import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from '../movie/movie.model';
import {MoviesService} from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[]
  currentPage: number
  query = ""

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentPage = 1

    this.route.queryParams
      .subscribe(params => {
          window.scrollTo(0,0)
          if(params['search']){
            this.query = params['search']
            this.getMovies(this.currentPage.toString(), this.query)
          } else {
            this.getMovies(this.currentPage.toString(), '')
          }
      })
  }

  getMovies(pageNumber: string, query: string) {
    this.moviesService.movies(this.currentPage.toString(), query)
      .subscribe(movies => this.movies = movies)
  }

  //Called when user scroll down
  appendNextPage() {
    this.currentPage++
    this.moviesService.movies(this.currentPage.toString(), this.query)
      .subscribe(movies => {
        movies.forEach(movie => this.movies.push(movie))
      })
  }

}
