import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './ui/page-home/page-home.component';

import { PageMovieComponent } from './ui/page-movie/page-movie.component';
import { PageMovieDatailsComponent } from './ui/page-movie-datails/page-movie-datails.component';
import { PageSeriesComponent } from './ui/page-series/page-series.component';
import { PageSeriesDatailsComponent } from './ui/page-series-datails/page-series-datails.component';
import { PagePeopleComponent } from './ui/page-people/page-people.component';
import { PagePeopleDetailsComponent } from './ui/page-people-details/page-people-details.component';
import { PageFavComponent } from './ui/page-fav/page-fav.component';
import { PageCapitulosComponent } from './ui/page-capitulos/page-capitulos.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
const routes: Routes = [

  {path: '', component: PageHomeComponent},
    {path: 'inicio', component: PageHomeComponent},
    {path: 'pelicula/:id', component: PageMovieDatailsComponent},
    { path: 'movie-details/:id', component: PageMovieDatailsComponent },

  {path: 'home', component: PageHomeComponent}, 
  {path: 'movie', component: PageMovieComponent},
  {path: 'movieDetails/:id', component: PageMovieDatailsComponent},
  {path: 'serie', component: PageSeriesComponent},
  {path: 'serieDetails/:id', component:PageSeriesDatailsComponent},
  {path: 'people', component: PagePeopleComponent},
  {path: 'peopleDetails/:id', component: PagePeopleDetailsComponent},
  {path: 'fav',component:PageFavComponent},
  {path: 'cap', component:PageCapitulosComponent},
  {path: '', pathMatch:'full', redirectTo: 'home'},
  {path: '**', component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
