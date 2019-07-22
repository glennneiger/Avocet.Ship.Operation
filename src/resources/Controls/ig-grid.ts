/// <reference path="../../../wwwroot/igniteui/js/infragistics.lob.js" />
import { bindable, inject } from 'aurelia-framework';
import '../../../igniteui/js/infragistics.lob';
import  $  from 'jquery';
@inject(Element)
export class IgGrid {
  @bindable options;
  @bindable id;
  element:any ;
  constructor(element) {
    this.element = element;
  }
  dataChanged(newValuee, oldValue) {
    alert('hola');
  }
  attached() {
    var grid = $(this.element).find('table');
    //set id of the grid
    grid.attr("id", this.id);
    //initilize the widget
    grid.igGrid(this.options);
  }
}
