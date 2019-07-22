//import { Shipservice } from 'resources/Services/Shipservice'
import { inject } from 'aurelia-framework';
import * as alasql from 'alasql';
import { EventAggregator } from 'aurelia-event-aggregator';
import * as toastr from "toastr";
import { DialogService } from 'aurelia-dialog';
import Swal from 'sweetalert2';
import { Nowhydro } from 'nowhydro';
//import { Nowtanks } from 'Views/nowtanks';
//import { Nowhydro } from 'Views/nowhydro';
@inject(DialogService, EventAggregator)
export class Newobservation {
  message: string;
  myPub;
  ea;
  dynerror: string;
  toast;
  dialogservice;
  person;
  TotalWeights;
  lowdraft;
  highdraft;

  draftiscorrect: boolean = true;
  constructor(dialogservice, ea) {
    this.message = 'Hello world';
    this.ea = ea;
    //this.myPub = shipservice;
    this.dialogservice = dialogservice;
    //this.toast = toaster;
   toastr.options.closeButton = true;
    toastr.options.positionClass = 'toast-top-center';
    
  }
  doupdatehydro() {
    this.dialogservice.open({ viewModel: Nowhydro, model: this.myPub, lock: false }).whenClosed(response => {
      if (!response.wasCancelled) {
        console.log('good');
      } else {
        console.log('bad');
      }
      console.log(response.output);
    });
  }

  cancelgoback() {
    this.ea.publish('gotobackhome', { testValue: 'New ship?' });
  }

  gettanksums() {
    let toadata = this.myPub.currenttanks;
    let res = alasql('SELECT TankType ,SUM(Weight::NUMBER) as Weight FROM ? GROUP BY TankType', [toadata]);
    let totalwa: number = 0;
    this.myPub.currentsurvey.ballast = 0;
    this.myPub.currentsurvey.freshwater = 0;
    this.myPub.currentsurvey.treated = 0;
    this.myPub.currentsurvey.fuel = 0;
    this.myPub.currentsurvey.diesel = 0;
    this.myPub.currentsurvey.luboil = 0;
    this.myPub.currentsurvey.hydraulicoil = 0;
    this.myPub.currentsurvey.slop = 0;
    this.myPub.currentsurvey.bilge = 0;
    this.myPub.currentsurvey.misc = 0;
    this.myPub.currentsurvey.environment = 0;


    res.forEach(item => {
      totalwa += parseFloat(item.Weight);
      //alert(item.Weight);
      //alert(totalwa);
      this.myPub.currentsurvey.deductible = totalwa.toString();
      if (item.TankType === "WB") { this.myPub.currentsurvey.ballast = parseFloat(item.Weight) };
      if (item.TankType === "FW") { this.myPub.currentsurvey.freshwater = parseFloat(item.Weight) };
      if (item.TankType === "TW") { this.myPub.currentsurvey.treated = parseFloat(item.Weight) };
      if (item.TankType === "FO") { this.myPub.currentsurvey.fuel = parseFloat(item.Weight) };
      if (item.TankType === "DO") { this.myPub.currentsurvey.diesel = parseFloat(item.Weight) };
      if (item.TankType === "LO") { this.myPub.currentsurvey.luboil = parseFloat(item.Weight) };
      if (item.TankType === "HO") { this.myPub.currentsurvey.hydraulicoil = parseFloat(item.Weight) };
      if (item.TankType === "SL") { this.myPub.currentsurvey.slop = parseFloat(item.Weight) };
      if (item.TankType === "BG") { this.myPub.currentsurvey.bilge = parseFloat(item.Weight) };
      if (item.TankType === "MS") { this.myPub.currentsurvey.misc = parseFloat(item.Weight) };
      if (item.TankType === "ET") { this.myPub.currentsurvey.environment = parseFloat(item.Weight) };
    });
    this.TotalWeights = totalwa;
  }

 

  DoUpdateTanks() {
    //this.dialogservice.open({ viewModel: Nowtanks, model: this.person, lock: false }).whenClosed(response => {
    //  if (!response.wasCancelled) {
    //    console.log('good');
    //  } else {
    //    console.log('bad');
    //  }
    //  console.log(response.output);
    //});
  }

  DoCalcheck(object) {
    //let val1 = this.myPub.currenthydro[0].Draft;
    //let val2 = this.myPub.currenthydro[this.myPub.currenthydro.length-1].Draft;
    
    if (object < this.lowdraft) {
      object = this.lowdraft;
    }
    if (object > this.highdraft) {
      object = this.highdraft;
    }

  }

  alerto( val) {
    Swal.fire('You need to add two rows of draft values , above and below ' + val + "meters.");
  }

  calculations() {
    try {


      // check if all para are ok

      if (+this.myPub.currentobserved.FordPort === 0 ) return;
      if (+this.myPub.currentobserved.AftPort === 0) return;
      if (+this.myPub.currentobserved.MidPort === 0) return;

      if (+this.myPub.currentobserved.FordStbd === 0) return;
      if (+this.myPub.currentobserved.AftStbd === 0) return;
      if (+this.myPub.currentobserved.MidStbd === 0) return; 


      //if (+this.myPub.currentobserved.FordPort < this.lowdraft || +this.myPub.currentobserved.FordPort > this.highdraft) { this.dynerror = "Draft range not found..."; this.alerto(this.myPub.currentobserved.FordPort);return;} 
      //if (+this.myPub.currentobserved.AftPort < this.lowdraft || +this.myPub.currentobserved.AftPort > this.highdraft) { this.dynerror = "Draft range not found..."; this.alerto(this.myPub.currentobserved.AftPort); return;} 
      //if (+this.myPub.currentobserved.MidPort < this.lowdraft || +this.myPub.currentobserved.MidPort > this.highdraft) { this.dynerror = "Draft range not found..."; this.alerto(this.myPub.currentobserved.MidPort); return;}

      //if (+this.myPub.currentobserved.FordStbd < this.lowdraft || +this.myPub.currentobserved.FordStbd > this.highdraft) { this.dynerror = "Draft range not found..."; this.alerto(this.myPub.currentobserved.FordStbd); return;} 
      //if (+this.myPub.currentobserved.AftStbd < this.lowdraft || +this.myPub.currentobserved.AftStbd > this.highdraft) { this.dynerror = "Draft range not found..."; this.alerto(this.myPub.currentobserved.AftStbd); return;} 
      //if (+this.myPub.currentobserved.MidStbd < this.lowdraft || +this.myPub.currentobserved.MidStbd > this.highdraft) { this.dynerror = "Draft range not found..."; this.alerto(this.myPub.currentobserved.MidStbd); return;} 


      this.myPub.currentsurvey = {};
      this.gettanksums();
      let totalwa: number = +this.TotalWeights;
      //  toastr.options.onShown = function () { alert('hola'); }
      // Toast("This is great program");// Toast.TYPE_ERROR, Toast.TIME_NORMAL);
      //  return;
      toastr.info('Calculating...');

      this.dynerror = "Calculating...";
      this.myPub.currentsurvey.cargotoload = this.myPub.currentobserved.Cargotoload;

      //    let toadata = this.myPub.currenttanks;
      //      let res = alasql('SELECT TankType ,SUM(Weight::NUMBER) as Weight FROM ? GROUP BY TankType', [toadata]);
      ////    let res =  alasql('SELECT TankType ,SUM(Weight) as Weight FROM ? GROUP BY TankType', [toadata]);
      //    let totalwa: number = 0;
      //    console.log(res);
      //    //this.myPub.currentsurvey.cargo = "123";
      //    res.forEach(item => {
      //      totalwa += item.Weight;
      //      this.myPub.currentsurvey.deductible = totalwa.toString();
      //      if (item.TankType === "WB") { this.myPub.currentsurvey.ballast = item.Weight };
      //      if (item.TankType === "FW") { this.myPub.currentsurvey.freshwater = item.Weight };
      //      if (item.TankType === "TW") { this.myPub.currentsurvey.treated = item.Weight };
      //      if (item.TankType === "FO") { this.myPub.currentsurvey.fuel = item.Weight };
      //      if (item.TankType === "DO") { this.myPub.currentsurvey.diesel = item.Weight };
      //      if (item.TankType === "LO") { this.myPub.currentsurvey.luboinl = item.Weight };
      //      if (item.TankType === "HO") { this.myPub.currentsurvey.hydraulicoil = item.Weight };
      //      if (item.TankType === "SL") { this.myPub.currentsurvey.slop = item.Weight };
      //      if (item.TankType === "BG") { this.myPub.currentsurvey.bilge = item.Weight };
      //      if (item.TankType === "MS") { this.myPub.currentsurvey.misc = item.Weight };
      //      if (item.TankType === "ET") { this.myPub.currentsurvey.environment = item.Weight };
      //    });

      this.myPub.currentsurvey.fordmark = this.myPub.currentship.Df.toFixed(3);
      this.myPub.currentsurvey.aftmark = this.myPub.currentship.Da.toFixed(3);
      this.myPub.currentsurvey.midmark = this.myPub.currentship.Dm.toFixed(3);
      this.myPub.currentsurvey.keel = this.myPub.currentship.KEELPLATE.toFixed(3);

      console.log(this.myPub.currentsurvey);

      this.myPub.currentsurvey.fordmean = ((+this.myPub.currentobserved.FordPort + +this.myPub.currentobserved.FordStbd) / 2).toFixed(3);
      this.myPub.currentsurvey.aftmean = ((+this.myPub.currentobserved.AftPort + +this.myPub.currentobserved.AftStbd) / 2).toFixed(3);
      this.myPub.currentsurvey.midmean = ((+this.myPub.currentobserved.MidPort + +this.myPub.currentobserved.MidStbd) / 2).toFixed(3);


      console.log(this.myPub.currentsurvey);

      //draft correction
      var appTrim = +this.myPub.currentsurvey.aftmean - +this.myPub.currentsurvey.fordmean;
      var fordcorrection = (appTrim * +this.myPub.currentship.Df) / +this.myPub.currentship.LBM;
      var aftcorrection = (appTrim * +this.myPub.currentship.Da) / +this.myPub.currentship.LBM;
      var midcorrection = (appTrim * +this.myPub.currentship.Dm) / +this.myPub.currentship.LBM;

      this.myPub.currentsurvey.aftcorr = aftcorrection.toFixed(3);
      this.myPub.currentsurvey.fordcorr = fordcorrection.toFixed(3);
      this.myPub.currentsurvey.midcorr = midcorrection.toFixed(3);
      console.log(this.myPub.currentsurvey);

      this.myPub.currentsurvey.fordcorrd = (fordcorrection + (+this.myPub.currentobserved.FordPort + +this.myPub.currentobserved.FordStbd) / 2).toFixed(3);
      this.myPub.currentsurvey.aftcorrd = (aftcorrection + (+this.myPub.currentobserved.AftPort + +this.myPub.currentobserved.AftStbd) / 2).toFixed(3);
      this.myPub.currentsurvey.midcorrd = (midcorrection + (+this.myPub.currentobserved.MidPort + +this.myPub.currentobserved.MidStbd) / 2).toFixed(3);


      var trueTrim: number = +this.myPub.currentsurvey.aftcorrd - +this.myPub.currentsurvey.fordcorrd;
      var meandraft: number = (+this.myPub.currentsurvey.fordcorrd + +this.myPub.currentsurvey.aftcorrd) / 2;
      var meansofmean: number = (meandraft + +this.myPub.currentsurvey.midcorrd) / 2;
      var quartermean: number = (+this.myPub.currentsurvey.midcorrd + meansofmean) / 2;
      quartermean -= +this.myPub.currentship.KEELPLATE;
      this.myPub.currentsurvey.meandraft = meandraft.toString();
      this.myPub.currentsurvey.meanofmean = quartermean.toString(); // ( quartermean- Convert.ToDecimal(tKeelcorr.Text)).toFixed(3);
      var hogsag = +this.myPub.currentsurvey.midcorrd - meandraft;
      this.myPub.currentsurvey.hogsag = hogsag.toString();
      this.myPub.currentsurvey.hogorsag = (+this.myPub.currentsurvey.hogsag > 0) ? "Sag" : "Hog";
      console.log(this.myPub.currentsurvey);
      // lets us do the displacement
      // find the draft 
      console.log(this.myPub.currenthydro);
      let indexup = this.myPub.currenthydro.findIndex(bola => bola.Draft > quartermean);
      let indexdown = indexup - 1;

      console.log("updraft " + indexup);
      console.log("downindexupdraft " + indexdown);


      if (indexup < 0) {
        this.dynerror = "Draft /Displacement not in range.";
        toastr.warning('Draft /Displacement not in range.', 'Please update your ship hydro table');
        this.alerto(quartermean);
        return;
      }

      console.log("draft down " + this.myPub.currenthydro[indexdown].Draft)
      let commonfactor = (quartermean - this.myPub.currenthydro[indexdown].Draft) / (this.myPub.currenthydro[indexup].Draft - this.myPub.currenthydro[indexdown].Draft);
      console.log(commonfactor);
      let mDraft = quartermean;
      let mDispl = this.myPub.currenthydro[indexdown].Displ + ((this.myPub.currenthydro[indexup].Displ - this.myPub.currenthydro[indexdown].Displ) * commonfactor);
      let mTPC = this.myPub.currenthydro[indexdown].TPC + (this.myPub.currenthydro[indexup].TPC - this.myPub.currenthydro[indexdown].TPC) * commonfactor;
      let mMCTC = this.myPub.currenthydro[indexdown].MCTC + (this.myPub.currenthydro[indexup].MCTC - this.myPub.currenthydro[indexdown].MCTC) * commonfactor;
      let mLCF = this.myPub.currenthydro[indexdown].LCF + (this.myPub.currenthydro[indexup].LCF - this.myPub.currenthydro[indexdown].LCF) * commonfactor;

      console.log(mDispl);
      console.log(mTPC);
      console.log(mMCTC);
      console.log(mLCF);

      this.myPub.currentsurvey.tpc = mTPC.toFixed(3);
      this.myPub.currentsurvey.displ = mDispl.toFixed(3);
      this.myPub.currentsurvey.lcf = mLCF.toFixed(3);

      // now take the mctc up and down
      let draftmctcup = quartermean + 0.5;
      let draftmctcdown = quartermean - 0.5;

      let mctc1up = this.myPub.currenthydro.findIndex(bola => bola.Draft > draftmctcup);
      let mctc1down = indexup - 1;

      if (mctc1up < 0) {
        this.dynerror = "Draft /Displacement not in range.";
        toastr.warning('MCTC Draft /Displacement not in range.', 'Trim Correction will not tbe accurate');
        this.alerto(draftmctcup);
        //return;
      }
      if (mctc1down < 0) {
        this.dynerror = "Draft /Displacement not in range.";
        toastr.warning('MCTC Draft /Displacement not in range.', 'Trim Correction will not tbe accurate');
        this.alerto(draftmctcdown);
        // return;
      }


      var myMCTC1 = this.myPub.currenthydro[mctc1down].MCTC +
        (this.myPub.currenthydro[mctc1up].MCTC - this.myPub.currenthydro[mctc1down].MCTC) * ((draftmctcup - this.myPub.currenthydro[mctc1down].Draft) / (this.myPub.currenthydro[mctc1up].Draft - this.myPub.currenthydro[mctc1down].Draft)); //                       commonfactor;

      console.log(mctc1up, mctc1down, myMCTC1);

      let mctc2up = this.myPub.currenthydro.findIndex(bola => bola.Draft > draftmctcdown);
      let mctc2down = indexup - 1;



      if (mctc2up < 0) {
        this.dynerror = "Draft /Displacement not in range.";
        toastr.warning('MCTC Draft /Displacement not in range.', 'Trim Correction will not tbe accurate');
        //return;
      }
      if (mctc2down < 0) {
        this.dynerror = "Draft /Displacement not in range.";
        toastr.warning('MCTC Draft /Displacement not in range.', 'Trim Correction will not tbe accurate');
        //return;
      }


      var myMCTC2 = this.myPub.currenthydro[mctc2down].MCTC +
        (this.myPub.currenthydro[mctc2up].MCTC - this.myPub.currenthydro[mctc2down].MCTC) * ((draftmctcdown - this.myPub.currenthydro[mctc2down].Draft) / (this.myPub.currenthydro[mctc2up].Draft - this.myPub.currenthydro[mctc2down].Draft)); //                       commonfactor;

      console.log(mctc2up, mctc2down, myMCTC2);


      let diff = myMCTC1 - myMCTC2;

      let mLCFmid = 0;
      if (mLCF > (this.myPub.currentship.LBB / 5)) {
        var tester = (this.myPub.currentship.LBB / 2) - mLCF;
        mLCFmid = tester;// ?? 0;
      }
      else { mLCFmid = mLCF; }

      // LCF if minus if ford
      let signer = -1;
      if (mLCFmid > 0 && trueTrim > 0) { signer = 1; }
      else if (mLCFmid < 0 && trueTrim < 0) { signer = 1; }
      var trimcorrr1 = ((mLCFmid * mTPC * trueTrim * 100) / this.myPub.currentship.LBB); //  * signer;
      trimcorrr1 = Math.abs(trimcorrr1);// ?? 0);
      trimcorrr1 = trimcorrr1 * signer;
      let trimcorr2 = 50 * trueTrim * trueTrim; // * (Avocet.mMCTChigh - Avocet.mMCTClow) ;

      var trimcorrrr2 = trimcorr2 * (diff / this.myPub.currentship.LBB);
      this.myPub.currentsurvey.mctc1 = myMCTC1.toFixed(3);
      this.myPub.currentsurvey.mctc2 = myMCTC2.toFixed(3);
      this.myPub.currentsurvey.truetrim = trueTrim.toFixed(3);

      this.myPub.currentsurvey.trimcorr1 = trimcorrr1.toFixed(3);
      this.myPub.currentsurvey.trimcorr2 = trimcorrrr2.toFixed(3);

      // now calculate the list corrcetion
      let ldraftmctcup = this.myPub.currentobserved.MidPort;  //quartermean + 0.5m;
      let ldraftmctcdown = this.myPub.currentobserved.MidStbd;  // quartermean - 0.5m;


      let lmctc1up = this.myPub.currenthydro.findIndex(bola => bola.Draft > ldraftmctcup);
      let lmctc1down = indexup - 1;

      if (lmctc1up < 0) {
        this.dynerror = "Draft /Displacement not in range";
        toastr.warning('MCTC Draft /Displacement not in range.', 'Trim Correction will not tbe accurate');
        //return;
      }
      if (lmctc1down < 0) {
        toastr.warning('MCTC Draft /Displacement not in range.', 'Trim Correction will not tbe accurate');
        this.dynerror = "Draft /Displacement not in range.";
        //return;
      }


      var lmyMCTC1 = this.myPub.currenthydro[lmctc1down].TPC +
        (this.myPub.currenthydro[lmctc1up].TPC - this.myPub.currenthydro[lmctc1down].TPC) * ((ldraftmctcup - this.myPub.currenthydro[lmctc1down].Draft) / (this.myPub.currenthydro[lmctc1up].Draft - this.myPub.currenthydro[lmctc1down].Draft)); //                       commonfactor;
      console.log("lmymctc1 " + lmyMCTC1);


      let lmctc2up = this.myPub.currenthydro.findIndex(bola => bola.Draft > ldraftmctcdown);
      let lmctc2down = indexup - 1;

      if (lmctc2up < 0) {
        this.dynerror = "Draft /Displacement not in range.";
        toastr.warning('MCTC Draft /Displacement not in range.', 'Trim Correction will not tbe accurate');
        //return;
      }
      if (lmctc2down < 0) {
        toastr.warning('MCTC Draft /Displacement not in range.', 'Trim Correction will not tbe accurate');
        this.dynerror = "Draft /Displacement not in range.";
        //return;
      }

      var lmyMCTC2 = this.myPub.currenthydro[lmctc2down].TPC +
        (this.myPub.currenthydro[lmctc2up].TPC - this.myPub.currenthydro[lmctc2down].TPC) * ((ldraftmctcdown - this.myPub.currenthydro[lmctc2down].Draft) / (this.myPub.currenthydro[lmctc2up].Draft - this.myPub.currenthydro[lmctc2down].Draft)); //                       commonfactor;
      console.log("lmymctc2 " + lmyMCTC2);


      //decimal lmmMCTC1 = lmyMCTC2 == null ? 0 : lmyMCTC1;

      var ldiff = lmyMCTC1 - lmyMCTC2;
      this.myPub.currentsurvey.tpc1 = lmyMCTC1.toFixed(3);
      this.myPub.currentsurvey.tpc2 = lmyMCTC2.toFixed(3);

      var listcorr = Math.abs(6 * (ldiff) * (ldraftmctcup - ldraftmctcdown));
      this.myPub.currentsurvey.listcorr = listcorr.toFixed(3);

      var tDisplAfterTrim = (mDispl + trimcorrr1 + trimcorrrr2 + listcorr);//.ToString("N3");

      this.myPub.currentsurvey.dispwcorr = tDisplAfterTrim.toFixed(3);


      if (+this.myPub.currentobserved.Density < 990 || +this.myPub.currentobserved.Density > 1040) {
        this.dynerror = "Check Density should be between 990 and 1045";
        toastr.warning('Density not in range (900 -1045).', 'Assuming 1020');
        this.myPub.currentobserved.Density = 1020;
        //return;
      }

      var tDensityCorr = ((this.myPub.currentobserved.Density - 1025) * tDisplAfterTrim / 1025);//.ToString("N3");
      this.myPub.currentsurvey.densitycorr = tDensityCorr.toFixed(3);


      var tDisplDensityCorr = tDisplAfterTrim + tDensityCorr;//.ToString("N3");
      //var tDisplDensity =  tDisplAfterTrim + tDensityCorr;//.ToString("N3");

      this.myPub.currentsurvey.displatdensity = tDisplDensityCorr.toFixed(3);

      // let us calculate cargo
      let mcargo = tDisplDensityCorr - this.myPub.currentship.LIGHTSHIP - this.myPub.currentobserved.Constant - totalwa;
      this.myPub.currentsurvey.deductible = this.myPub.currentship.LIGHTSHIP - this.myPub.currentobserved.Constant - totalwa;

      this.myPub.currentsurvey.cargo = mcargo.toString();


      //this.dynerror = "Done Calculation...";

      this.myPub.currentsurvey.Shipname = this.myPub.currentship.Shipname;
      this.myPub.currentsurvey.VoyNo = this.myPub.currentobserved.VoyNo;
      this.myPub.currentsurvey.UserId = this.myPub.currentship.UserId;
      this.myPub.currentsurvey.ShipId = this.myPub.currentship.Id;
      this.myPub.currentsurvey.Dated = this.myPub.currentobserved.Dated;
      this.myPub.currentsurvey.Timed = this.myPub.currentobserved.Timed;

      //this.myPub.currentsurvey.hogsag = "";
      this.myPub.currentsurvey.constant = this.myPub.currentobserved.Constant.toFixed(3);

      this.myPub.currentsurvey.Port = this.myPub.currentobserved.Port;
      this.myPub.currentsurvey.LIGHTSHIP = this.myPub.currentship.LIGHTSHIP.toFixed(3);
      this.myPub.currentsurvey.tanks = JSON.stringify(this.myPub.currenttanks);
      this.myPub.currentsurvey.observed = JSON.stringify(this.myPub.currentobserved);

      if (!this.myPub.currentsurvey.VoyNo) {
        this.dynerror = "No Voyage Number.";
        toastr.warning('No Voyage Number.', 'Enter Voy Number');
      }

      toastr.clear();
      toastr.success('Calculation complete.', 'Do not forget to save his condition');

      console.log(this.myPub.currentsurvey);
    } catch (e) {
      toastr.clear();
      toastr.error('Data Error, please check your shipdata and Draft range.', 'Fatal Error');
      this.dynerror = "Error Cannot continue..." + e.message;
    }
  };

  //toFixed(2)
  activate(params) {
    this.myPub = params;
    this.lowdraft = this.myPub.currenthydro[0].Draft;
    this.highdraft = this.myPub.currenthydro[this.myPub.currenthydro.length - 1].Draft;
  }

  attached() {
    this.gettanksums();
  }
}

