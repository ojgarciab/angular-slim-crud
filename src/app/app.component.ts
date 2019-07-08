import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-slim-crud';
  constructor(private router: Router, private oauthService: OAuthService) {
      this.configureWithoutDiscovery();
    }
  
    private configureWithoutDiscovery() {
      this.oauthService.configure(environment.authConfig);
      this.oauthService.tokenValidationHandler = new NullValidationHandler();
      this.oauthService.tryLogin();
    }
}
