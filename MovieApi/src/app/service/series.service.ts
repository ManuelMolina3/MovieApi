import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SerieResponse } from '../models/series-item.interface';


import { SeriesDetailsResponse } from '../models/series-details.interface';
import { environment } from '../../environments/environment';
import { MovieCharacterResponse } from '../models/movie-character';





@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  

  constructor(private http: HttpClient) { }
  getSeriesToHome():Observable<SerieResponse> {
    return this.http.get<SerieResponse>(`${environment.baseUrlSeries}?${environment.apiKey}`);
  }

  getSeries(page :number): Observable<SerieResponse>{
    return this.http.get<SerieResponse>(`${environment.baseUrlSeries}?${environment.apiKey}&page=${page}`);
  }
  getSeriesDetalles(id: number): Observable<SeriesDetailsResponse>{
    return this.http.get<SeriesDetailsResponse>(`${environment.baseUrlSeriesDetails}${id}?${environment.apiKey}`);
  }
  getDetallesSeries1(id: string): Observable<SeriesDetailsResponse>{
    return this.http.get<SeriesDetailsResponse>(`${environment.baseUrlSeriesDetails}/${id}?${environment.apiKey}`)

  }
  getActoresSeries(id:string):Observable<MovieCharacterResponse>{
    return this.http.get<MovieCharacterResponse>(`${environment.baseUrlSeriesDetails}${id}/credits?${environment.apiKey}`)
  }
  getPeliculasPorGenero(id: string): Observable<SerieResponse> {
    return this.http.get<SerieResponse>(`${environment.baseUrl}/discover/tv?api_key=${environment.apiKey}&with_genres=${id}`);
}

  
}
