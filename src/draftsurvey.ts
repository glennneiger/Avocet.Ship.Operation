import { Tanks, surveyresult, Shipservice } from 'resources/Services/Shipservice'
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Repository } from 'resources/Services/Repository';
@inject(EventAggregator, Shipservice,Repository )

export class Draftsurvey {
  ea;
  currentViewModelPath = "draftobservations";
  myPub;
  repository;
  currentShip;
  constructor(EventAggregator, shipservice,repository) {
    this.myPub = shipservice;
    this.repository = repository;
    this.ea = EventAggregator;
    // get the ship
    // currentship will get its value from myPub.myships
    //repository.getShip(37)
    //  .then(data => {
    //    this.currentShip = data;
    //    this.myPub.currentship.UserId = this.currentShip.userId;
    //    this.myPub.currentship.Shipname = this.currentShip.shipname;
    //    this.myPub.currentship.Callsign = this.currentShip.callsign;
    //    this.myPub.currentship.Df = this.currentShip.df;
    //    this.myPub.currentship.Dm = this.currentShip.dm;
    //    this.myPub.currentship.Da = this.currentShip.da;
    //    this.myPub.currentship.LBM = this.currentShip.lbm;
    //    this.myPub.currentship.LBB = this.currentShip.lbb;
    //    this.myPub.currentship.LIGHTSHIP = this.currentShip.lightship;
    //    this.myPub.currentship.POR = this.currentShip.por;
    //    this.myPub.currentship.Flag = this.currentShip.flag;
    //    this.myPub.currentship.Classification = this.currentShip.classificationips;
    //    this.myPub.currentship.IMONo = this.currentShip.imono;
    //    this.myPub.currentship.DWT = this.currentShip.dwt;
    //    this.myPub.currentship.GRT = this.currentShip.grt;
    //    this.myPub.currentship.NRT = this.currentShip.nrt;
    //    this.myPub.currentship.Sdraft = this.currentShip.sdraft;
    //    this.myPub.currentship.DepthMoulded = this.currentShip.depthMoulded;
    //    this.myPub.currentship.DepthExtreme = this.currentShip.depthExtreme;
    //    this.myPub.currentship.Owners = this.currentShip.owners;
    //    this.myPub.currentship.Charterers = this.currentShip.charterers;
    //    this.myPub.currentship.KEELPLATE = this.currentShip.keelplate;
    //    this.myPub.currentship.Managers = this.currentShip.managers;
    //    this.myPub.currentship.Operators = this.currentShip.operators;
    //    this.myPub.currentship.Breadth = this.currentShip.breadth;
    //    this.myPub.currentship.Hydro = this.currentShip.hydro;
    //    this.myPub.currentship.Tanks = this.currentShip.tanks;
    //    this.myPub.currentship.Notes = this.currentShip.notes;
    //    this.myPub.currentship.UOM = this.currentShip.uom;
    //    this.myPub.currentship.Master = this.currentShip.master;
    //    this.myPub.currentship.Mate = this.currentShip.mate;
    //    // if empty then add new
      
    //    // if empty then add new

    //    let defaulttankvalue = [
    //      {
    //        "Id": 1,
    //        "TankType": "WB",
    //        "TankCode": "WBALL",
    //        "Tankname": "Total Ballast",
    //        "TankContent": "Salt Water",
    //        "Volume": 10000,
    //        "Density": 1025,
    //        "Weight": 0
    //      },
    //      {
    //        "Id": 2,
    //        "TankType": "FW",
    //        "TankCode": "FWALL",
    //        "Tankname": "Total Fresh Water",
    //        "TankContent": "Fresh Water",
    //        "Volume": 10000,
    //        "Density": 1000,
    //        "Weight": 0
    //      },
    //      {
    //        "Id": 3,
    //        "TankType": "TW",
    //        "TankCode": "TWALL",
    //        "Tankname": "Treated Water",
    //        "TankContent": "MISC",
    //        "Volume": 10000,
    //        "Density": 1025,
    //        "Weight": 0
    //      },
    //      {
    //        "Id": 4,
    //        "TankType": "FO",
    //        "TankCode": "FOALL",
    //        "Tankname": "Total Fuel Oil",
    //        "TankContent": "Fuel /Gas Oil",
    //        "Volume": 10000,
    //        "Density": 95,
    //        "Weight": 0
    //      },
    //      {
    //        "Id": 5,
    //        "TankType": "DO",
    //        "TankCode": "DOALL",
    //        "Tankname": "Total DO",
    //        "TankContent": "Diesel ",
    //        "Volume": 10000,
    //        "Density": 800,
    //        "Weight": 0
    //      },
    //      {
    //        "Id": 6,
    //        "TankType": "LO",
    //        "TankCode": "LOALL",
    //        "Tankname": "Total Lub Oil",
    //        "TankContent": "Lub Oil",
    //        "Volume": 10000,
    //        "Density": 880,
    //        "Weight": 0
    //      },
    //      {
    //        "Id": 7,
    //        "TankType": "HO",
    //        "TankCode": "HOALL",
    //        "Tankname": "Total Hydraulic Oil",
    //        "TankContent": "Hydraulic Oil",
    //        "Volume": 10000,
    //        "Density": 880,
    //        "Weight": 0
    //      },
    //      {
    //        "Id": 8,
    //        "TankType": "SL",
    //        "TankCode": "SLALL",
    //        "Tankname": "Total Slop",
    //        "TankContent": "Slop",
    //        "Volume": 10000,
    //        "Density": 1025,
    //        "Weight": 0
    //      },
    //      {
    //        "Id": 9,
    //        "TankType": "BG",
    //        "TankCode": "BGALL",
    //        "Tankname": "Total Bilge Water",
    //        "TankContent": "Bilge Dirty",
    //        "Volume": 10000,
    //        "Density": 1025,
    //        "Weight": 0
    //      },
    //      {
    //        "Id": 10,
    //        "TankType": "MS",
    //        "TankCode": "MSALL",
    //        "Tankname": "Total Miscellaneous",
    //        "TankContent": "MISC",
    //        "Volume": 10000,
    //        "Density": 1025,
    //        "Weight": 0
    //      },
    //      {
    //        "Id": 11,
    //        "TankType": "ET",
    //        "TankCode": "ETALL",
    //        "Tankname": "Environment Tanks",
    //        "TankContent": "MISC",
    //        "Volume": 10000,
    //        "Density": 1025,
    //        "Weight": 0
    //      }
    //    ];


    //    this.myPub.currenttanks = JSON.parse(this.currentShip.tanks); // this should be from the history
    //    if (this.myPub.currenttanks==undefined) {
    //      this.myPub.currenttanks = defaulttankvalue;
    //    }
    //    this.myPub.currenthydro = JSON.parse(this.currentShip.hydro);

    //    this.repository.GetVoyages(this.currentShip.id, this.currentShip.userId)
    //      .then(data => {
    //        this.myPub.currentallsurvey = [];
    //        this.myPub.currentallsurvey = data;
    //      });
    //  }); // end of loop for repository

    // now register the various ea's
    let subscription1 = this.ea.subscribe('gotonewobs', response => {
      this.currentViewModelPath = "newobservation";
    });
    let subscription2 = this.ea.subscribe('gotobackhome', response => {
      this.currentViewModelPath = "draftobservations";
    });

  }// end of constructor

  activate(params) {
    //this.myPub = params.data;
    this.repository.getShip(params.data)
      .then(data => {
        this.currentShip = data;
        this.myPub.currentship.UserId = this.currentShip.userId;
        this.myPub.currentship.Shipname = this.currentShip.shipname;
        this.myPub.currentship.Callsign = this.currentShip.callsign;
        this.myPub.currentship.Df = this.currentShip.df;
        this.myPub.currentship.Dm = this.currentShip.dm;
        this.myPub.currentship.Da = this.currentShip.da;
        this.myPub.currentship.LBM = this.currentShip.lbm;
        this.myPub.currentship.LBB = this.currentShip.lbb;
        this.myPub.currentship.LIGHTSHIP = this.currentShip.lightship;
        this.myPub.currentship.POR = this.currentShip.por;
        this.myPub.currentship.Flag = this.currentShip.flag;
        this.myPub.currentship.Classification = this.currentShip.classificationips;
        this.myPub.currentship.IMONo = this.currentShip.imono;
        this.myPub.currentship.DWT = this.currentShip.dwt;
        this.myPub.currentship.GRT = this.currentShip.grt;
        this.myPub.currentship.NRT = this.currentShip.nrt;
        this.myPub.currentship.Sdraft = this.currentShip.sdraft;
        this.myPub.currentship.DepthMoulded = this.currentShip.depthMoulded;
        this.myPub.currentship.DepthExtreme = this.currentShip.depthExtreme;
        this.myPub.currentship.Owners = this.currentShip.owners;
        this.myPub.currentship.Charterers = this.currentShip.charterers;
        this.myPub.currentship.KEELPLATE = this.currentShip.keelplate;
        this.myPub.currentship.Managers = this.currentShip.managers;
        this.myPub.currentship.Operators = this.currentShip.operators;
        this.myPub.currentship.Breadth = this.currentShip.breadth;
        this.myPub.currentship.Hydro = this.currentShip.hydro;
        this.myPub.currentship.Tanks = this.currentShip.tanks;
        this.myPub.currentship.Notes = this.currentShip.notes;
        this.myPub.currentship.UOM = this.currentShip.uom;
        this.myPub.currentship.Master = this.currentShip.master;
        this.myPub.currentship.Mate = this.currentShip.mate;
        // if empty then add new

        // if empty then add new

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


        this.myPub.currenttanks = JSON.parse(this.currentShip.tanks); // this should be from the history
        if (this.myPub.currenttanks==undefined) {
          this.myPub.currenttanks = defaulttankvalue;
        }
        this.myPub.currenthydro = JSON.parse(this.currentShip.hydro);

        this.repository.GetVoyages(this.currentShip.shipname, this.currentShip.userId)
          .then(data => {
            this.myPub.currentallsurvey = [];
            this.myPub.currentallsurvey = data;
          });
      }); // end of loop for repository



  }

}
