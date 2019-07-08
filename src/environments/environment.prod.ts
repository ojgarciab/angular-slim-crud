import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  // Test with google oauth2
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin + '/web/inicio',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  clientId: '<Id de cliente público>',
  strictDiscoveryDocumentValidation: false,
  scope: 'openid profile email',
  showDebugInformation: true,
  sessionChecksEnabled: true,
};

export const environment = {
  production: true
};
