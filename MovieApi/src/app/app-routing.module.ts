import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
const routes: Routes = [
  {path: '', component: PageHomeComponent},
    {path: 'inicio', component: PageHomeComponent},
    {path: 'pelicula/:id', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
