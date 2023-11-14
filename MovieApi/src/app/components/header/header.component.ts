import { Component, Input, OnInit } from '@angular/core';
import { MovieDetailsResponse } from 'src/app/models/movie-details.interface';
import { Movie } from 'src/app/models/movie-item.interface';
import { MovieService } from 'src/app/service/movie.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  pelicula1!: Movie; 
  p: Movie [] = [];
  nombre = '';
  title = '';
  movieDetails!: MovieDetailsResponse;
  constructor (private movieService: MovieService){}
  ngOnInit(): void {
    this.getNombre(this.pelicula1.id);
  }
  onKeyUp(pelicula: Movie) { // appending the updated value to the variable 
    this.title += pelicula.title + ' | '; 
  } 

  getNombre(id: number): void{
    this.movieService.getDetallesPelicula(id).subscribe(res=>{
      this.movieDetails=res;
    })
  }
}
