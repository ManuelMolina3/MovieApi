import { Injectable } from '@angular/core';
import { PeopleResponse } from '../models/people-item.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PeopleDetailsResponse } from '../models/people-details.interface';
import { PeopleMovieResponse } from '../models/people-movie.interface';
import { PeopleTvShowResponse } from '../models/people-tv-show.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private cliente: HttpClient) { }

  getPeopleToHome():Observable<PeopleResponse> {
    return this.cliente.get<PeopleResponse>(`${environment.baseUrlPeople}?${environment.apiKey}`)
  }

  getPeopleList(page: number):Observable<PeopleResponse>{
    return this.cliente.get<PeopleResponse>(`${environment.baseUrlPeople}?${environment.apiKey}&page=${page}`)
  }
  getPeopleDetails(id: number): Observable<PeopleDetailsResponse>{
    return this.cliente.get<PeopleDetailsResponse>(`${environment.baseUrlPeopleDetails}${id}?${environment.apiKey}`)
  }
  getMoviesPeople(id:number):Observable<PeopleMovieResponse>{
    return this.cliente.get<PeopleMovieResponse>(`${environment.baseUrlPeopleDetails}${id}/movie_credits?${environment.apiKey}`);
    
  }

  getTvShowsPeople(id:number):Observable<PeopleTvShowResponse>{
    return this.cliente.get<PeopleTvShowResponse>(`${environment.baseUrlPeopleDetails}${id}/tv_credits?${environment.apiKey}`);
  }
 
 
}
