import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieResponse } from '../models/movie-item.interface';
import { environment } from 'src/environments/enviroments';
import { MovieDetailsResponse } from '../models/movie-details.interface';
import { MovieCharacterResponse } from '../models/movie-character';
import { MovieVideoResponse } from '../models/movie-video';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private cliente: HttpClient) { }

  getMovieList(): Observable<MovieResponse>{
    return this.cliente.get<MovieResponse>(`${environment.baseUrlSeries}/movie/popular?api_key=${environment.apiKey}`)
  }
  getDetallesPelicula(id: number): Observable<MovieDetailsResponse>{
    return this.cliente.get<MovieDetailsResponse>(`${environment.baseUrlSeries}/movie/${id}?api_key=${environment.apiKey}`)
  }
  getDetallesPelicula1(id: string): Observable<MovieDetailsResponse>{
    return this.cliente.get<MovieDetailsResponse>(`${environment.baseUrlSeries}/movie/${id}?api_key=${environment.apiKey}`)
  }
  getActoresPelicula(id:string):Observable<MovieCharacterResponse>{
    return this.cliente.get<MovieCharacterResponse>(`${environment.baseUrlSeries}/movie/${id}/credits?api_key=${environment.apiKey}`)
  }
  getVideoPelicula(id:string):Observable<MovieVideoResponse>{
    return this.cliente.get<MovieVideoResponse>(`${environment.baseUrlSeries}/movie/${id}/videos?api_key=${environment.apiKey}`)
  }
  getPeliculasPorGenero(id: string): Observable<MovieResponse> {
    return this.cliente.get<MovieResponse>(`${environment.baseUrlSeries}/genre/${id}/movies?api_key=${environment.apiKey}`);
  }
  
  

  
}
