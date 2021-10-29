import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public isAuthed = false
  apiUrl = "http://localhost:3000/api"

  constructor(private _http:HttpClient) { }

  register(data:any):Observable <any> {
    return this._http.post(`${this.apiUrl}/user/register`, data)
  }

  login(data:any):Observable <any> {
    return this._http.post(`${this.apiUrl}/user/login`, data)
  }

  profile():Observable <any> {
    return this._http.get(`${this.apiUrl}/user/profile`)
  }
}
