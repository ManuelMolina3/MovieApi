import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroments';
import { AccountResponse } from '../models/account.interface';
import { Observable } from 'rxjs';
import { StatusResponse } from '../models/status.interface';
import { MovieResponse } from '../models/movie-item.interface';
import { SerieResponse } from '../models/series-item.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  getAccountDetails(): Observable<AccountResponse>{
    let sessionId= localStorage.getItem('SESSION_ID');
    return this.http.get<AccountResponse>(`${environment.baseUrl}/account?session_id=${sessionId}&${environment.apiKey}`);
  }
  addMovieToWatchlist(id: number): Observable<StatusResponse> {
    return this.http.post<StatusResponse>(`${environment.baseUrl}/account/${localStorage.getItem('ACCOUNT_ID')}/watchlist?${environment.apiKey}&session_id=${localStorage.getItem('SESSION_ID')}`,
    {
      "media_type": "movie",
      "media_id": id,
      "watchlist": true
    });

  }

  getMovieWatchlistByPage(page: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${environment.baseUrl}//account/${localStorage.getItem('ACCOUNT_ID')}/watchlist/movies?${environment.apiKey}&session_id=${localStorage.getItem('SESSION_ID')}&page=${page}`);
  }
  addTvShowToWatchlist(id: number): Observable<StatusResponse> {
    return this.http.post<StatusResponse>(`${environment.baseUrl}/account/${localStorage.getItem('ACCOUNT_ID')}/watchlist?${environment.apiKey}&session_id=${localStorage.getItem('SESSION_ID')}`,
    {
      "media_type": "tv",
      "media_id": id,
      "watchlist": true
    });
  }
  getTvWatchlistByPage(page: number): Observable<SerieResponse> {
    return this.http.get<SerieResponse>(`${environment.baseUrl}//account/${localStorage.getItem('ACCOUNT_ID')}/watchlist/tv?${environment.apiKey}&session_id=${localStorage.getItem('SESSION_ID')}&page=${page}`);
  }



}
