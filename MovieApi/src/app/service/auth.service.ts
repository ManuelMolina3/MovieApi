import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetRequestTokenResponse } from '../models/get-request-token.interface';
import { environment } from 'src/environments/enviroments';
import { CreateSessionResponse } from '../models/create-session.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getRequestToken(): Observable<GetRequestTokenResponse>{
    return this.http.get<GetRequestTokenResponse>(`${environment.baseUrl}/autentication/token/new`, {
      headers:{
        'Authorization': `Bearer ${environment.tmbdtoken}`
      }
    });
  }
  createSession(token: string): Observable<CreateSessionResponse>{
    return this.http.post<CreateSessionResponse>(`${environment.baseUrl}/authentication/session/new`,
    {
      request_token: token
    }, 
    {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.tmbdtoken}` 
      }
    });
  }
}
