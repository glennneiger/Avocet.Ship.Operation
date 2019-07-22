import { inject } from 'aurelia-framework';
import { Tanks, surveyresult, Shipservice } from 'resources/Services/Shipservice'
import { Repository } from 'resources/Services/Repository';
import { bindable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import $ from 'jquery'
import { AuthService } from 'resources/Services/AuthService';
//import { DialogService } from 'aurelia-dialog';
import { Userlogin } from 'Userlogin';
import { Router } from 'aurelia-router';
import Swal from 'sweetalert2';
@inject(Repository, EventAggregator, Shipservice, AuthService,Router)
export class Myships {
  router;
  message: string;
  repository;
  shiplist: any;
  id;
  opts;
  ea;
  DialogService;
  @bindable obsFunction;
  myPub;
  auth;
  makenewmessage = "";
  loginlogout = "";
  showlogin: boolean = true;
  mysurvey: surveyresult = {};
  mytank: Tanks = {};
  constructor(repository, ea, shipservice, auth,Router) {
    // get these from login
    this.router = Router;
    shipservice.currentuser.userId = "7b1c6917-8";
    shipservice.currentuser.email = "bfaruqi@gmail.com";

    this.ea = ea;
    //this.DialogService = DialogService;
    this.auth = auth;
    this.repository = repository;
    this.myPub = shipservice;
    this.mysurvey.voyNo = "122";
    this.loginlogout = "";
    if (shipservice.currentuser.email) {
      //alert(shipservice.currentuser.email);
      $('#loggeduser').html(shipservice.currentuser.email);
      this.loginlogout = "Logout";
      //this.myPub.currentallsurvey.splice(1, 0, this.mysurvey);
      repository.getData(shipservice.currentuser.userId)
        .then(data => {
          //alert(data[0].shipname);
          this.shiplist = data;
          this.showlogin = false;
          this.myPub.myships = data; // JSON.parse(data);
          this.message = this.shiplist[0].shipname;
          this.loginlogout = "Logout";
        });
    }

  }

  loadcurrentvoyage(id) {
    this.myPub.currenttanks = JSON.parse(this.myPub.currentallsurvey[id].tanks);
    this.myPub.currentobserved = JSON.parse(this.myPub.currentallsurvey[id].observed);
    if (!this.myPub.currenttanks || this.myPub.currenttanks.length == 0) {
      this.mytank.TankType = "BW";
      this.myPub.currenttanks = [];
      this.myPub.currenttanks.splice(1, 0, this.mytank);
    }
    //alert(id)
    //this works great this.router.navigateToRoute('dash', { id: 10 });
    this.ea.publish('gotonewobs', { testValue: 'New ship?' });
  }

  logoutlogin() {
    alert('hola');
    if (this.loginlogout == "Logout") {
      localStorage["drafttoken"] = null;
      this.shiplist = null;
      this.myPub.myships = null; // JSON.parse(data);
      this.myPub.currentuser = null;
      this.loginlogout = "";
      this.showlogin = true;
      $('#loggeduser').html("Please Log In");
      //Shipservice.currentuser = null;
    }
  }

  goto() {
    if (this.myPub.currentuser == null || !this.myPub.currentuser.name) {
      this.DialogService.open({ viewModel: Userlogin, model: this.myPub.currentuser, lock: true }).whenClosed(response => {
        if (!response.wasCancelled) {
          $('#loggeduser').html(this.myPub.currentuser.email);
          localStorage["drafttoken"] = JSON.stringify(response.output);
          this.ea.publish('gotonewship', { testValue: 'New ship?' });
          console.log(this.myPub.currentuser.email);
        } else {
          console.log(response.output); //'bad');
        }
        //console.log(response.output);
      });
    }
    else  // logged baby
    {
      this.ea.publish('gotonewobs', { testValue: 'New ship?' });
    }
  }


  gotologin() {
    if (this.myPub.currentuser == null || !this.myPub.currentuser.name) {
      this.DialogService.open({ viewModel: Userlogin, model: this.myPub.currentuser, lock: true }).whenClosed(response => {
        if (!response.wasCancelled) {
          $('#loggeduser').html(this.myPub.currentuser.email);
          localStorage["drafttoken"] = JSON.stringify(response.output);
          this.myPub.currentuser = response.output;
          if (this.myPub.currentuser.email) {
            //alert(shipservice.currentuser.email);

            this.repository.getData(this.myPub.currentuser.userId)
              .then(data => {
                //alert(data[0].shipname);
                this.shiplist = data;
                this.showlogin = false;
                this.myPub.myships = data; // JSON.parse(data);
                this.loginlogout = "Logout";
              });
          }



        }
        else {
        }
       
      });
    }
    else  // logged baby
    {
    }
  }

  activateship($index) {
    Swal.fire({
      title: this.shiplist[$index].shipname,
      text: "Select this ship",
      type: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Select'
    }).then((result) => {
      if (result.value) {
        //alert(this.shiplist[$index].shipname);
        // here use router to goto the page use params to pass the info
        this.selectship($index);
        this.router.navigateToRoute('draftsurvey', { data: this.shiplist[$index].id });
      }
    });
  }
  gotoobs() {
    this.ea.publish('gotonewobs', { testValue: 'New ship?' });
    //alert('dsdf');
    //this.obsFunction();
  }
  selectship($index) {
    this.myPub.currentship.UserId = this.myPub.myships[$index].userId;
    this.myPub.currentship.Shipname = this.shiplist[$index].shipname;
    this.myPub.currentship.Callsign = this.myPub.myships[$index].callsign;
    this.myPub.currentship.Df = this.myPub.myships[$index].df;
    this.myPub.currentship.Dm = this.myPub.myships[$index].dm;
    this.myPub.currentship.Da = this.myPub.myships[$index].da;
    this.myPub.currentship.LBM = this.myPub.myships[$index].lbm;
    this.myPub.currentship.LBB = this.myPub.myships[$index].lbb;
    this.myPub.currentship.LIGHTSHIP = this.myPub.myships[$index].lightship;
    this.myPub.currentship.POR = this.myPub.myships[$index].por;
    this.myPub.currentship.Flag = this.myPub.myships[$index].flag;
    this.myPub.currentship.Classification = this.myPub.myships[$index].classificationips;
    this.myPub.currentship.IMONo = this.myPub.myships[$index].imono;
    this.myPub.currentship.DWT = this.myPub.myships[$index].dwt;
    this.myPub.currentship.GRT = this.myPub.myships[$index].grt;
    this.myPub.currentship.NRT = this.myPub.myships[$index].nrt;
    this.myPub.currentship.Sdraft = this.myPub.myships[$index].sdraft;
    this.myPub.currentship.DepthMoulded = this.myPub.myships[$index].depthMoulded;
    this.myPub.currentship.DepthExtreme = this.myPub.myships[$index].depthExtreme;
    this.myPub.currentship.Owners = this.myPub.myships[$index].owners;
    this.myPub.currentship.Charterers = this.myPub.myships[$index].charterers;
    this.myPub.currentship.KEELPLATE = this.myPub.myships[$index].keelplate;
    this.myPub.currentship.Managers = this.myPub.myships[$index].managers;
    this.myPub.currentship.Operators = this.myPub.myships[$index].operators;
    this.myPub.currentship.Breadth = this.myPub.myships[$index].breadth;
    this.myPub.currentship.Hydro = this.myPub.myships[$index].hydro;
    this.myPub.currentship.Tanks = this.myPub.myships[$index].tanks;
    this.myPub.currentship.Notes = this.myPub.myships[$index].notes;
    this.myPub.currentship.UOM = this.myPub.myships[$index].uom;
    this.myPub.currentship.Master = this.myPub.myships[$index].master;
    this.myPub.currentship.Mate = this.myPub.myships[$index].mate;

   
    this.myPub.currenttanks = JSON.parse(this.myPub.myships[$index].tanks); // this should be from the history



       //    // if empty then add new

        let defaulttankvalue = [
          {
            "Id": 1,
            "TankType": "WB",
            "TankCode": "WBALL",
            "Tankname": "Total Ballast",
            "TankContent": "Salt Water",
            "Volume": 10000,
            "Density": 1025,
            "Weight": 0
          },
          {
            "Id": 2,
            "TankType": "FW",
            "TankCode": "FWALL",
            "Tankname": "Total Fresh Water",
            "TankContent": "Fresh Water",
            "Volume": 10000,
            "Density": 1000,
            "Weight": 0
          },
          {
            "Id": 3,
            "TankType": "TW",
            "TankCode": "TWALL",
            "Tankname": "Treated Water",
            "TankContent": "MISC",
            "Volume": 10000,
            "Density": 1025,
            "Weight": 0
          },
          {
            "Id": 4,
            "TankType": "FO",
            "TankCode": "FOALL",
            "Tankname": "Total Fuel Oil",
            "TankContent": "Fuel /Gas Oil",
            "Volume": 10000,
            "Density": 95,
            "Weight": 0
          },
          {
            "Id": 5,
            "TankType": "DO",
            "TankCode": "DOALL",
            "Tankname": "Total DO",
            "TankContent": "Diesel ",
            "Volume": 10000,
            "Density": 800,
            "Weight": 0
          },
          {
            "Id": 6,
            "TankType": "LO",
            "TankCode": "LOALL",
            "Tankname": "Total Lub Oil",
            "TankContent": "Lub Oil",
            "Volume": 10000,
            "Density": 880,
            "Weight": 0
          },
          {
            "Id": 7,
            "TankType": "HO",
            "TankCode": "HOALL",
            "Tankname": "Total Hydraulic Oil",
            "TankContent": "Hydraulic Oil",
            "Volume": 10000,
            "Density": 880,
            "Weight": 0
          },
          {
            "Id": 8,
            "TankType": "SL",
            "TankCode": "SLALL",
            "Tankname": "Total Slop",
            "TankContent": "Slop",
            "Volume": 10000,
            "Density": 1025,
            "Weight": 0
          },
          {
            "Id": 9,
            "TankType": "BG",
            "TankCode": "BGALL",
            "Tankname": "Total Bilge Water",
            "TankContent": "Bilge Dirty",
            "Volume": 10000,
            "Density": 1025,
            "Weight": 0
          },
          {
            "Id": 10,
            "TankType": "MS",
            "TankCode": "MSALL",
            "Tankname": "Total Miscellaneous",
            "TankContent": "MISC",
            "Volume": 10000,
            "Density": 1025,
            "Weight": 0
          },
          {
            "Id": 11,
            "TankType": "ET",
            "TankCode": "ETALL",
            "Tankname": "Environment Tanks",
            "TankContent": "MISC",
            "Volume": 10000,
            "Density": 1025,
            "Weight": 0
          }
        ];


       // this.myPub.currenttanks = JSON.parse(this.currentShip.tanks); // this should be from the history
        if (this.myPub.currenttanks==undefined) {
          this.myPub.currenttanks = defaulttankvalue;
        }


    

    this.myPub.currenthydro = JSON.parse(this.myPub.myships[$index].hydro);
    this.repository.GetVoyages(this.myPub.myships[$index].shipname, this.myPub.myships[$index].userId)
      .then(data => {
        this.myPub.currentallsurvey = [];
        this.myPub.currentallsurvey = data;
        //this.myPub.currentallsurvey.push(data[0]);
        //this.myPub.currentallsurvey.push(data[0]);
        //this.myPub.currentallsurvey.push(data[0]);
        //this.myPub.currentallsurvey.push(data[0]);
        this.opts.dataSource = data;
        this.makenewmessage = " To make a new observation , click any of the New Obs Button. This will use the active obs data."
        //alert(this.myPub.currentallsurvey[0].shipname);
        //alert(this.myPub.currentallsurvey[0].voyNo)
      });
  }
}
