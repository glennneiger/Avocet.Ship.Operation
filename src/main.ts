import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import {PLATFORM} from 'aurelia-pal';
//import * from 'aurelia-syncfusion-bridge';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap';

//Export jQuery to window object
import * as $ from 'jquery';
let winObj: any = <any>window;
winObj['jQuery'] = $;
winObj['$'] = $;

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    //.plugin(PLATFORM.moduleName('aurelia-syncfusion-bridge'), (syncfusion: any) => syncfusion.ejGrid())
    .plugin(PLATFORM.moduleName('aurelia-syncfusion-bridge'), (syncfusion: any) => syncfusion.useAll())
    .feature(PLATFORM.moduleName('resources/index'))
    .plugin(PLATFORM.moduleName('aurelia-validation'))
    .plugin(PLATFORM.moduleName('aurelia-dialog'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
