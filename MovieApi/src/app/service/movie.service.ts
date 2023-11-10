import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResponse } from '../models/movie-item.interface';
import { environment } from 'src/environments/enviroments';
import { MovieDetailsResponse } from '../models/movie-details.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private cliente: HttpClient) { }

  getMovieList(): Observable<MovieResponse>{
    return this.cliente.get<MovieResponse>(`${environment.baseUrlMovie}?${environment.apiKey}`)
  }
  getDetallesPelicula(id: number): Observable<MovieDetailsResponse>{
    return this.cliente.get<MovieDetailsResponse>(`${environment.baseUrlMovieDetails}${id}?${environment.apiKey}`)
  }
}
