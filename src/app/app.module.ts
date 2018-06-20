import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ServiceWorkerModule } from '@angular/service-worker';
import { MaterializeModule } from "angular2-materialize";
import { FormsModule } from '@angular/forms';

// TOAST
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

import { MoviesService } from './movies/movies.service';
import { FavoritesService } from './favorites/favorites.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule,
    FormsModule,
    CommonModule, // TOAST
    BrowserAnimationsModule, // TOAST
    ToastrModule.forRoot({ positionClass: 'toast-top-center' }), // TOAST
    InfiniteScrollModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    MoviesService,
    FavoritesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
