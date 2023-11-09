import { Injectable } from '@angular/core';
import { PeopleResponse } from '../models/people-item.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private cliente: HttpClient) { }
  getPeopleList():Observable<PeopleResponse>{
    return this.cliente.get<PeopleResponse>(`${environment.baseUrlSeries}/person/popular?api_key=${environment.apiKey}`)
  }
 
}
