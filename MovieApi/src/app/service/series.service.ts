import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SerieResponse } from '../models/series-item.interface';
import { environment } from 'src/environments/enviroments';
import { SeriesDetailsResponse } from '../models/series-details.interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) { }

  getSeries(page :number): Observable<SerieResponse>{
    return this.http.get<SerieResponse>(`${environment.baseUrlSeries}?${environment.apiKey}&&page=${page}`);
  }
  getSeriesDetalles(id: number): Observable<SeriesDetailsResponse>{
    return this.http.get<SeriesDetailsResponse>(`${environment.baseUrlSeries}${id}?${environment.apiKey}`)
  }
}
