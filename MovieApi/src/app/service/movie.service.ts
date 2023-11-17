import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable,forkJoin  } from 'rxjs';
import { Movie, MovieResponse } from '../models/movie-item.interface';




import { MovieDetailsResponse } from '../models/movie-details.interface';
import { MovieCharacterResponse } from '../models/movie-character';
import { MovieVideoResponse } from '../models/movie-video';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private MOVIE_URL = `https://api.themoviedb.org/3/search/movie?${environment.apiKey}&query=`;
  private TV_URL = `https://api.themoviedb.org/3/search/tv?${environment.apiKey}&query=`;
  private PERSON_URL = `https://api.themoviedb.org/3/search/person?${environment.apiKey}&query=`;

  private searchResultsSource = new BehaviorSubject<any[]>([]);
  searchResults$ = this.searchResultsSource.asObservable();
  constructor(private cliente: HttpClient) { }

  getMovieToHome(): Observable<MovieResponse> {
    return this.cliente.get<MovieResponse>(`${environment.baseUrlMovie}?${environment.apiKey}`)
  }

  getMovieList(page: number): Observable<MovieResponse>{
    return this.cliente.get<MovieResponse>(`${environment.baseUrlMovie}?${environment.apiKey}&page=${page}`)
  }
  getDetallesPelicula(id: number): Observable<MovieDetailsResponse>{

    return this.cliente.get<MovieDetailsResponse>(`${environment.baseUrlMovieDetails}/${id}?${environment.apiKey}`)
  }
  getDetallesPelicula1(id: string): Observable<MovieDetailsResponse>{
    return this.cliente.get<MovieDetailsResponse>(`${environment.baseUrlMovieDetails}/${id}?${environment.apiKey}`)

    return this.cliente.get<MovieDetailsResponse>(`${environment.baseUrlMovieDetails}${id}?${environment.apiKey}`)
  }

  getActoresPelicula(id:string):Observable<MovieCharacterResponse>{
    return this.cliente.get<MovieCharacterResponse>(`${environment.baseUrlMovieDetails}${id}/credits?${environment.apiKey}`)
  }
  getVideoPelicula(id:string):Observable<MovieVideoResponse>{

    return this.cliente.get<MovieVideoResponse>(`${environment.baseUrlMovie}${id}/videos?${environment.apiKey}`)

    return this.cliente.get<MovieVideoResponse>(`${environment.baseUrlMovieDetails}${id}/videos?${environment.apiKey}`)

  }
  getPeliculasPorGenero(id: string): Observable<MovieResponse> {
    return this.cliente.get<MovieResponse>(`${environment.baseUrl}/genre/${id}/movies?${environment.apiKey}`);
  }
  
  multiSearch(searchTerm: string): Observable<any[]> {
    const movieSearch = this.cliente.get<any>(`${this.MOVIE_URL}${searchTerm}`);
    const tvSearch = this.cliente.get<any>(`${this.TV_URL}${searchTerm}`);
    const personSearch = this.cliente.get<any>(`${this.PERSON_URL}${searchTerm}`);

    return forkJoin([movieSearch, tvSearch, personSearch]);
  }
  updateSearchResults(results: any[]) {
    this.searchResultsSource.next(results);
  }
  
}
