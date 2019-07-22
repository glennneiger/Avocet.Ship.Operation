//import config from 'config';
import { inject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';
@inject(HttpClient)
export  class AuthService {
  http;
  session;
  app;
  userdata;
  // As soon as the AuthService is created, we query local storage to
  // see if the login information has been stored. If so, we immediately
  // load it into the session object on the AuthService.
  constructor(HttpClient) {

//    HttpClient.configure(http => {
//      http.withBaseUrl(config.baseUrl);
//    });

    HttpClient.configure(config => {
      config
        .withBaseUrl('api/') //'api/
        .withDefaults({
          credentials: 'same-origin',
          headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'Fetch'
          }
        })
        .withInterceptor({
          request(request) {
            console.log(`Requesting ${request.method} ${request.url}`);
            return request;
          },
          response(response) {
            console.log(`Received ${response.status} ${response.url}`);
            return response;
          }
        });
    });



    this.http = HttpClient;
    //this.app = Aurelia;
    this.http.loginUrl = "UserProfile/Signin";
    this.session = JSON.parse(localStorage[this.http.tokenName] || null);
  }

  justlogin(username, password) {
  this.http
      .post(this.http.loginUrl, { username, password })
      .then((response) => response.json())
      .then((session) => {alert(session); this.userdata = session; return new Promise(function () { this.userdata; });});

    //return this.userdata;
  
  }
  

  CreateAccount(username, password) {


    return Promise.race([
      this.http
        .post('home/createaccount'+'/'+username+'/'+password)
        .then((response) => response.json())
        .then((session) => {return session;  })    
    ]);

  };

  GetAuthenticated(username, password) {

    let formData = new FormData();

    formData.append('username', username);
    formData.append('password', password);
    return this.http.fetch('userprofile/Signin',
        {
          method: 'POST',
          body: formData,
        })
      .then(response => response.json())
      .then((session) => { return session; });

    //return Promise.race([
    //  this.http
    //    .post(this.http.loginUrl + '/' + username + '/' + password)
    //    .then((response) => response.json())
    //    .then((session) => { return session; })
    //]);
  };



  sendpassword(username) {
    return Promise.race([
      this.http
        .post('home/sendpassword' + '/' + username )
        .then((response) => response.text())
    ]);

  };


  GetCode(username, password) {
    return Promise.race([
      this.http
        .post('home/passwordgenerate' + '/' + username + '/' + password)
        .then((response) => response.text())
        .then((session) => { return session; })
    ]);

  };

  // The login function needs to abstract away all of the details about
  // how we track and expose login information. A more advanced app might
  // want the login function to pass back a promise so it can perform
  // additional tasks on login, but we keep things simple here.
  login(username, password) {
    this.http
      .post(this.http.loginUrl, { username, password })
      .then((response) => response.content)
      .then((session) => {
        localStorage[this.http.tokenName] = JSON.stringify(session);
        this.session = session;
        this.app.setRoot('app');
      });
  }

  // The logout function reverses the actions of the login function. 
  // It is less common for logout to be async, but logout could also
  // return a promise if there were a need.
  logout() {
    localStorage[this.http.tokenName] = null;
    this.session = null;
    this.app.setRoot('login');// shoul go back
  }

  // A basic method for exposing information to other modules.  
 isAuthenticated() {
   return this.session !== null;
  }
}
