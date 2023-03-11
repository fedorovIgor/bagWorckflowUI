import { Component, OnInit } from '@angular/core';
import { OAuthService, JwksValidationHandler, NullValidationHandler } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './sso-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(private oauth: OAuthService) {}

  ngOnInit(): void {
    this.configOauth();
  }

  configOauth() {
    this.oauth.configure(authCodeFlowConfig);
    this.oauth.tokenValidationHandler = new NullValidationHandler();
    this.oauth.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauth.initCodeFlow();
  }

  logout() {
    this.oauth.logOut();
  }

  get token() {
    let claims: any = this.oauth.getIdentityClaims();
    localStorage.setItem('token', this.oauth.getAccessToken());
    return claims ? claims: null;
  }
}
