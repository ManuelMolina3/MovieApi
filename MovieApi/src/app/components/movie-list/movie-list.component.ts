import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie-item.interface';
import { Genre } from 'src/app/models/series-details.interface';
import { MovieService } from 'src/app/service/movie.service';
import { BelongsToCollection } from '../../models/movie-details.interface';
import { Cast } from '../../models/movie-character';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  @Output() peliculaClick = new EventEmitter<number>();
  peliculaList: Movie [] = [];
 
  
  
  
  constructor (private movieService: MovieService) {}
  ngOnInit(): void {
    
    this.movieService.getMovieList().subscribe(response =>{
      this.peliculaList=response.results;
    });
  }
  peliculaClickLista(idPelicula: number){
    this.peliculaClick.emit(idPelicula);
  }


}
