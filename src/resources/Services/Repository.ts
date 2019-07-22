import { inject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';

@inject(HttpClient)
export class Repository {
  client: HttpClient;
  message: string;
  myshiplist:any;
  myvoyages:any;
  constructor(http) {
    http.configure(config => {
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


    this.client = http;
  }

  getData(id) {
    return this.client.fetch('ShipWorks/getShipList/' + id)
      .then(response => response.json())
      .then(data => { this.myshiplist = data; return this.myshiplist; });
  }

  getShip(id) {
    return this.client.fetch('ShipWorks/getShip/' + id)
      .then(response => response.json())
      .then(data => { this.myshiplist = data; return this.myshiplist; });
  }

  //getData(id) {
  //  return Promise.race([
  //    this.client.fetch('/api/ShipWorks/getShipList/'+id)
  //    .then(response => response.json())
  //    .then(data => {
  //      //alert(data[0].shipname);      
  //      this.myshiplist=data ;
  //      return this.myshiplist;
  //    })
  //  ]);

  //};

  GetVoyages(id,data) {

    return this.client.fetch('ShipWorks/getVoyages/' + id+"/"+data)
      .then(response => response.json())
      .then(data => { this.myshiplist = data; return this.myshiplist; });
  }
  //  return Promise.race([
  //    this.client.fetch('/Home/getVoyages')
  //    .then(response => response.json())
  //      .then(data => {
  //        this.myshiplist = data;
  //        return this.myshiplist;
  //        //return data;
  //    })
  //  ]);

  //};



}
