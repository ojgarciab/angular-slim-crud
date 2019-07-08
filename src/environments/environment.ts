// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

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
  authConfig: authConfig,
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
