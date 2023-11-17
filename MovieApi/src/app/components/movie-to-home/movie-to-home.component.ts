import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie-item.interface';
import { MovieService } from '../../service/movie.service';


@Component({
  selector: 'app-movie-to-home',
  templateUrl: './movie-to-home.component.html',
  styleUrls: ['./movie-to-home.component.css']
})
export class MovieToHomeComponent implements OnInit{

  peliculaList: Movie [] = [];
  constructor(private movieService: MovieService){}
  ngOnInit(): void {
    this.movieService.getMovieToHome().subscribe(movie =>{
      this.peliculaList= movie.results;
    })
  }

}
