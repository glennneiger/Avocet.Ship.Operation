import { DialogController } from 'aurelia-dialog';
import { inject } from 'aurelia-framework';

import { Tanks, surveyresult, Shipservice } from 'resources/Services/Shipservice'
@inject(DialogController, Shipservice)
export class Nowhydro {
  message: string;
  controller;
  myPub;
  constructor(controller, shipservice) {
    this.controller = controller;
    this.myPub = shipservice;

  }
  closeme() {
    this.controller.ok();
  }
}





//import 'syncfusion-javascript/Scripts/ej/web/ej.grid.min';
//export class Nowhydro {
//  message: string;
//  shipDetails;
//  toolbarItems;
//  editSettings;
//  sortType;
//  constructor() {
//    this.message = 'Hello world';
    //this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    //this.toolbarItems = { showToolbar: true, toolbarItems: ["add", "edit", "delete", "update", "cancel"] }
    //this.sortType= { sortedColumns: [{ field: "Name", direction: "descending" }] }
    //this.shipDetails = [
    //  { Name: 'Hanari Carnes', City: 'Brazil' },
    //  { Name: 'Split Rail Beer & Ale', City: 'USA' },
    //  { Name: 'Ricardo Adocicados', City: 'Brazil' }
    //]/
//  }
//}



