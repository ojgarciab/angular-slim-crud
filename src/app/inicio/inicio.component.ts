import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OAuthService, JwksValidationHandler, NullValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  loginFailed: boolean = false;
  userProfile: object;

  constructor(private oauthService: OAuthService) {
    // Tweak config for implicit flow.
    // This is just needed b/c this demo uses both,
    // implicit flow as well as password flow
    this.oauthService.configure(environment.authConfig);
    this.oauthService.loadDiscoveryDocument();

  }

  ngOnInit() {
    //console.log(this.getParamsObjectFromHash()['id_token']);

    /*
            this.oauthService.loadDiscoveryDocumentAndTryLogin().then(_ => {
                if (!this.oauthService.hasValidIdToken() || !this.oauthService.hasValidAccessToken()) {
                  this.oauthService.initImplicitFlow('some-state');
                }
            });
            */
  }

  /*getParamsObjectFromHash() {
    const hash = window.location.hash ? window.location.hash.split('#') : [];
    let toBeReturned = {};
    if (hash.length && hash[1].split('&').length) {
      toBeReturned = hash[1].split('&').reduce((acc, x) => {
        const hello = x.split('=');
        if (hello.length === 2) acc[hello[0]] = hello[1];
          return acc;
      }, {});
    }
    return Object.keys(toBeReturned).length ? toBeReturned : null;
  }*/

  login() {
    //this.oauthService.initImplicitFlow('/some-state;p1=1;p2=2');
    this.oauthService.initImplicitFlow();
    // the parameter here is optional. It's passed around and can be used after logging in
  }

  logout() {
    this.oauthService.logOut();
  }

  loadUserProfile(): void {
    this.oauthService.loadUserProfile().then(up => (this.userProfile = up));
  }

  get givenName() {
    var claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['given_name'];
  }

  get familyName() {
    var claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['family_name'];
  }

  testSilentRefresh() {
    /*
         * Tweak config for implicit flow.
         * This is needed b/c this sample uses both flows
        */
    //this.oauthService.clientId = "spa-demo";
    this.oauthService.oidc = true;

    this.oauthService
      .silentRefresh()
      .then(info => console.debug('refresh ok', info))
      .catch(err => console.error('refresh error', err));
  }

  set requestAccessToken(value: boolean) {
    this.oauthService.requestAccessToken = value;
    localStorage.setItem('requestAccessToken', '' + value);
  }

  get requestAccessToken() {
    return this.oauthService.requestAccessToken;
  }

  get id_token() {
    return this.oauthService.getIdToken();
  }

  get access_token() {
    return this.oauthService.getAccessToken();
  }

  get id_token_expiration() {
    return this.oauthService.getIdTokenExpiration();
  }

  get access_token_expiration() {
    return this.oauthService.getAccessTokenExpiration();
  }
}
