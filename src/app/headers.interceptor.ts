import { Injectable, Optional } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { OAuthModuleConfig, OAuthStorage } from 'angular-oauth2-oidc';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  errorHandler: any;

  constructor(private authStorage: OAuthStorage,
    @Optional() private moduleConfig: OAuthModuleConfig) {}
    

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log("in interceptor!")
    let sendAccessToken = this.moduleConfig.resourceServer.sendAccessToken;
   
    if (sendAccessToken) {

      let token = this.authStorage.getItem('access_token');
      let header = 'Bearer ' + token;

      let headers = request.headers
                          .set('Authorization', header);

      request = request.clone({ headers });

      
  }

  return next.handle(request);

  }
}
