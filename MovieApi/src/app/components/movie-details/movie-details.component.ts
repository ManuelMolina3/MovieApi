import { Component, OnInit,Input } from '@angular/core';
import {BelongsToCollection, Genre, MovieDetailsResponse} from '../../models/movie-details.interface'
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { Cast, MovieCharacterResponse } from '../../models/movie-character';
import { Movie } from '../../models/movie-item.interface';
import { Result } from '../../models/movie-video';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  id!: string|null;
  pelicula!: MovieDetailsResponse;
  actores: Cast [] = [];
  currentRate!: number;  
  imagenFondo!: BelongsToCollection;
  peliculaDe!: Movie;
  video:Result [] = [];
  constructor (private route: ActivatedRoute,private peliculaService:MovieService ){}

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    
    if(this.id!=null){
     
      this.peliculaService.getActoresPelicula(this.id).subscribe(r=>{
        this.actores=r.cast;
         
      })
      this.peliculaService.getVideoPelicula(this.id).subscribe(res=>{
        this.video=res.results;
      })
     
      this.peliculaService.getDetallesPelicula1(this.id).subscribe(response=>{
        this.pelicula=response;
       this.imagenFondo = response.belongs_to_collection;
       this.getVotos(this.pelicula.id);
      })
    }
  }
  getVotos(id:number):void{
    this.peliculaService.getDetallesPelicula(id).subscribe(re=>{
      this.currentRate = re.vote_average / 2; 
    })
  }

  getGenres(): string {
    return this.pelicula.genres.map((genre: Genre) => genre.name).join(', ');
  }
}
