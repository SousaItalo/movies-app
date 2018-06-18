import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'home', component: MoviesComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: 'favorites', component: FavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
