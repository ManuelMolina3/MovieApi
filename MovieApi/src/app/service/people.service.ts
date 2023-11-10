import { Injectable } from '@angular/core';
import { PeopleResponse } from '../models/people-item.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroments';
import { PeopleDetailsResponse } from '../models/people-details.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private cliente: HttpClient) { }
  getPeopleList():Observable<PeopleResponse>{
    return this.cliente.get<PeopleResponse>(`${environment.baseUrlPeople}?${environment.apiKey}`)
  }
  getPeopleDetails(id: number): Observable<PeopleDetailsResponse>{
    return this.cliente.get<PeopleDetailsResponse>(`${environment.baseUrlPeopleDetails}${id}?${environment.apiKey}`)
  }
 
}
