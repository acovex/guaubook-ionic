import { Injectable, ErrorHandler } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthIterceptorService implements HttpInterceptor, ErrorHandler {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = req.clone();
    const headers = new HttpHeaders({
      ['Access-Control-Allow-Headers']:
        'x-requested-with, content-type, accept, origin, authorization, x-csrftoken, Authorization,x-auth, content-type',
      ['Access-Control-Allow-Methods']:
        'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      ['Access-Control-Allow-Origin']: '*',
    });
    authReq = req.clone({
      headers,
    });

    return next
      .handle(authReq)
      .pipe(catchError((err, _caught) => this.handleError(err)));
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    throw error;
  }
}
