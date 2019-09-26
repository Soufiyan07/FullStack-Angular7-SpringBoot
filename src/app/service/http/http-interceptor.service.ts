import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username = 'Soufiyan'
    let password = 'Azer123'

    let basicHeader = 'basic ' + window.btoa(username + ':' + password)
 
    request = request.clone({
      setHeaders: {
        Authorization: basicHeader
      }
    });
    return next.handle(request);

  }
}
