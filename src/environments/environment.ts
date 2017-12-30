// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC52PA65hK_ZbRUGzsUxRb4kwNf0l3H_SQ",
    authDomain: "personalwebsite-fccba.firebaseapp.com",
    databaseURL: "https://personalwebsite-fccba.firebaseio.com",
    projectId: "personalwebsite-fccba",
    storageBucket: "gs://personalwebsite-fccba.appspot.com/",
    messagingSenderId: "878863333031"
  }
};
