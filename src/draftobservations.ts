import { EventAggregator } from 'aurelia-event-aggregator';
import { inject } from 'aurelia-framework';
import * as moment from 'moment';
@inject(EventAggregator)
export class Draftobservations {
  message: string;
  myPub;
  ea;
  constructor(ea) {
    this.ea = ea;
  }
  activate(model) {
    this.myPub = model;
  }

  loadcurrentvoyage(id) {
    if (id === -1 || this.myPub.currentallsurvey[id].observed == null) {
      // then observed is all empty
      this.myPub.currentobserved.FordPort = 0;
      this.myPub.currentobserved.FordStbd = 0;
      this.myPub.currentobserved.AftPort = 0;
      this.myPub.currentobserved.AftStbd = 0;
      this.myPub.currentobserved.MidPort = 0;
      this.myPub.currentobserved.MidStbd = 0;
      this.myPub.currentobserved.Density = 1025;
      this.myPub.currentobserved.Constant = 1;
      this.myPub.currentobserved.List = 0;
      this.myPub.currentobserved.Weather = "Fair";
      this.myPub.currentobserved.Dated = moment().format('MM/DD/YYYY'); //new Date().toJSON().slice(0,10)
      this.myPub.currentobserved.Timed = "00:00";
      this.myPub.currentobserved.VoyNo = "";
      this.myPub.currentobserved.Port = "";
      this.myPub.currentobserved.Captain = "Capt. ";
      this.myPub.currentobserved.Mate = "ChOff. ";
      this.myPub.currentobserved.ObsType = "";
      this.myPub.currentobserved.Berth = "@ ";
      this.myPub.currentobserved.Cargotoload = "General";

    }
    else
    {
       this.myPub.currenttanks = JSON.parse(this.myPub.currentallsurvey[id].tanks);
       this.myPub.currentobserved = JSON.parse(this.myPub.currentallsurvey[id].observed);
    }


   
    //if (!this.myPub.currenttanks || this.myPub.currenttanks.length == 0) {
    //  this.mytank.TankType = "BW";
    //  this.myPub.currenttanks = [];
    //  this.myPub.currenttanks.splice(1, 0, this.mytank);
    //}
    //alert(id)
    //this works great this.router.navigateToRoute('dash', { id: 10 });
    this.ea.publish('gotonewobs', { testValue: 'New ship?' });
  }
}
