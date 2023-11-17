import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { BelongsToCollection } from '../../models/movie-details.interface';
import { Cast } from '../../models/movie-character';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie-item.interface';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  @Output() peliculaClick = new EventEmitter<number>();
  peliculaList: Movie [] = [];
  paginaActual: number = 1;
  NumeroDePaginas!: number;
  constructor (private movieService: MovieService,private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.pagination();
  }
  pagination(){
    this.movieService.getMovieList(this.paginaActual).subscribe(response =>{
      this.peliculaList=response.results;
      this.NumeroDePaginas=response.total_pages;
    });
  
  }
  peliculaClickLista(idPelicula: number){
    this.peliculaClick.emit(idPelicula);
  }
  esPaginaInicio(): boolean {
    return this.router.url === '/home';
  }
  esPaginaPeliculas(): boolean {
    return this.router.url === '/movie';
  }


}
