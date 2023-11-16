import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  getAccountDetails(){
    let sessionId= localStorage.getItem('SESSION_ID');
    return this.http.get(`${environment.baseUrl}/account?session_id=${sessionId}`, 
    {
      headers:{
        'Authorization': `Bearer${environment.tmbdtoken}`
      }
    });
  }
}
