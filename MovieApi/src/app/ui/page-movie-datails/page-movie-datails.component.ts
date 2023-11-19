import { Component, OnInit,Input } from '@angular/core';
import {BelongsToCollection, Genre, MovieDetailsResponse} from '../../models/movie-details.interface'
import { ActivatedRoute, Router } from '@angular/router';

import { Cast, MovieCharacterResponse } from '../../models/movie-character';
import { Movie } from '../../models/movie-item.interface';
import { Result } from '../../models/movie-video';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-page-movie-datails',
  templateUrl: './page-movie-datails.component.html',
  styleUrls: ['./page-movie-datails.component.css']
})
export class PageMovieDatailsComponent {
  id!: string|null;
  pelicula!: MovieDetailsResponse;
  actores: Cast [] = [];
  currentRate!: number;  
  imagenFondo!: BelongsToCollection;
  peliculaDe: Movie[]=[];
  pelicula1!: Movie;
  video:Result [] = [];
  current!:number;
  constructor (private route: ActivatedRoute,private peliculaService:MovieService,private router: Router ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
      
    if (this.id != null) {
      this.peliculaService.getDetallesPelicula1(this.id).subscribe(response => {
        this.pelicula = response;
        this.current = this.pelicula.vote_average / 2;
        this.imagenFondo = response.belongs_to_collection;
        this.getVotos(this.pelicula.id);
        
        this.pelicula.genres.forEach(genre => {
          this.peliculaService.getPeliculasPorGenero(genre.id.toString()).subscribe(res => {
            this.peliculaDe = res.results;
            this.peliculaDe.forEach(pelicula => {
              this.peliculaService.getDetallesPelicula(pelicula.id).subscribe(details => {
                pelicula.vote_average = details.vote_average / 2;
              });
            });
          });
        });
        
      });
  
      this.peliculaService.getActoresPelicula(this.id).subscribe(r => {
        this.actores = r.cast;
      });
  
      this.peliculaService.getVideoPelicula(this.id).subscribe(res => {
        this.video = res.results;
      });
    }
  }
  
  
  getVotos(id:number):void{
    this.peliculaService.getDetallesPelicula(id).subscribe(re=>{
      this.currentRate = re.vote_average / 2; 
    })
  }
  getMovieDetails(id: number): void {
    this.peliculaService.getDetallesPelicula(id).subscribe(details => {
      
      this.current = details.vote_average / 2;  
    });
}

  getGenres(): string {
    return this.pelicula.genres.map((genre: Genre) => genre.name).join(', ');
  }
  onResultClick(result: any) {
    this.router.navigate(['/movie-details', result.id]);
  }
}
