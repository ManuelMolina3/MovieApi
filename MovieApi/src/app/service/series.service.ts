import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SerieResponse } from '../models/series-item.interface';
import { environment } from 'src/environments/enviroments';
import { SeriesDetailsResponse } from '../models/series-details.interface';
import { SeriePeopleResponse } from '../models/series-people.interface';
import { TrailerSerieResponse } from '../models/trailer-serie.interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) { }
  getSeriesToHome():Observable<SerieResponse> {
    return this.http.get<SerieResponse>(`${environment.baseUrlSeries}?${environment.apiKey}`);
  }

  getSeries(page :number): Observable<SerieResponse>{
    return this.http.get<SerieResponse>(`${environment.baseUrlSeries}?${environment.apiKey}&&page=${page}`);
  }
  getSeriesDetalles(id: number): Observable<SeriesDetailsResponse>{
    return this.http.get<SeriesDetailsResponse>(`${environment.baseUrlSeriesDetails}${id}?${environment.apiKey}`);
  }
  getPeopleToSeries(id:number): Observable<SeriePeopleResponse>{
    return this.http.get<SeriePeopleResponse>(`${environment.baseUrlSeriesDetails}${id}/credits?${environment.apiKey}`)
  }
  getVideoSerie(id:number): Observable<TrailerSerieResponse>{
    return this.http.get<TrailerSerieResponse>(`${environment.baseUrlSeriesDetails}${id}/videos${environment.apiKey}`)
  }
  getSeriesPorGenero(id: string): Observable<SerieResponse> {
    return this.http.get<SerieResponse>(`${environment.baseUrlSeries}/genre/${id}/serie?${environment.apiKey}`);
  }
}
