import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie-item.interface';
import { MovieService } from 'src/app/service/movie.service';
import { MovieDetailsResponse, Genre } from 'src/app/models/movie-details.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() pelicula!: Movie;
  @Output() peliculaClick = new EventEmitter<number>();

  movieDetails!: MovieDetailsResponse;
  
  currentRate!: number;  

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovieDetails(this.pelicula.id);
  }
  clickDetalles(){
    this.peliculaClick.emit(this.pelicula?.id);
  }

  getMovieDetails(id: number): void {
    this.movieService.getDetallesPelicula(id).subscribe(details => {
      this.movieDetails = details;
      this.currentRate = details.vote_average / 2;  
    });
}


  getGenres(): string {
    return this.movieDetails.genres.map((genre: Genre) => genre.name).join(', ');
  }
 
}
