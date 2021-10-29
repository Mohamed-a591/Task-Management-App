import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _data:DataService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem("token")
    if(token){
      this._data.isAuthed = true
      request = request.clone({
        headers: request.headers.set("Authorization", `Bearer ${token}`)
      })
    }
    return next.handle(request);
  }
}
