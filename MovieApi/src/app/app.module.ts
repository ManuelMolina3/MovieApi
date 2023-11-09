import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { SeriesItemComponent } from './components/series-item/series-item.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { PageSeriesComponent } from './ui/page-series/page-series.component';
import { PeopleItemComponent } from './components/people-item/people-item.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SeriesDetailsComponent } from './components/series-details/series-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieNavComponent } from './components/movie-nav/movie-nav.component';
import { SeriesNavComponent } from './components/series-nav/series-nav.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { PageMovieComponent } from './ui/page-movie/page-movie.component';
import { PageMovieDatailsComponent } from './ui/page-movie-datails/page-movie-datails.component';
import { PageSeriesDatailsComponent } from './ui/page-series-datails/page-series-datails.component';
import { PagePeopleDetailsComponent } from './ui/page-people-details/page-people-details.component';
import { PagePeopleComponent } from './ui/page-people/page-people.component';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { PageListComponent } from './ui/page-list/page-list.component';
import { PageFavComponent } from './ui/page-fav/page-fav.component';
import { PageCapitulosComponent } from './ui/page-capitulos/page-capitulos.component';
import { PageUserComponent } from './ui/page-user/page-user.component';
import { CapitulosItemComponent } from './components/capitulos-item/capitulos-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    SeriesItemComponent,
    SeriesListComponent,
    PageSeriesComponent,
    PeopleItemComponent,
    PeopleListComponent,
    PeopleDetailsComponent,
    MovieDetailsComponent,
    SeriesDetailsComponent,
    MovieListComponent,
    MovieNavComponent,
    SeriesNavComponent,
    PageNotFoundComponent,
    PageMovieComponent,
    PageMovieDatailsComponent,
    PageSeriesDatailsComponent,
    PagePeopleDetailsComponent,
    PagePeopleComponent,
    PageHomeComponent,
    PageListComponent,
    PageFavComponent,
    PageCapitulosComponent,
    PageUserComponent,
    CapitulosItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
