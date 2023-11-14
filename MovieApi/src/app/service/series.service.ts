import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SerieResponse } from '../models/series-item.interface';
import { environment } from 'src/environments/enviroments';
import { SeriesDetailsResponse } from '../models/series-details.interface';
import { SeriePeopleResponse } from '../models/series-people.interface';

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
  
}
