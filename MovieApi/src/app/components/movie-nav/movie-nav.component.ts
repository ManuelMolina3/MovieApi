import { Component } from '@angular/core';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movie-nav',
  templateUrl: './movie-nav.component.html',
  styleUrls: ['./movie-nav.component.css']
})
export class MovieNavComponent {
  favoritos: any[] = [];

  constructor(private movieService: MovieService) {
    this.favoritos = this.movieService.getFavoritos();
  }

}
