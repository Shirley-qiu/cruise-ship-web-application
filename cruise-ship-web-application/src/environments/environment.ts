// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'cruise-ship-web-application',
    appId: '1:299168280077:web:8f8d54dffcb305cb772f44',
    databaseURL: 'https://cruise-ship-web-application-default-rtdb.firebaseio.com',
    storageBucket: 'cruise-ship-web-application.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyANCnXy6kI43fc5pcTaYaZozaC1GvltToE',
    authDomain: 'cruise-ship-web-application.firebaseapp.com',
    messagingSenderId: '299168280077',
    measurementId: 'G-RVTSPCZ2SJ',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
