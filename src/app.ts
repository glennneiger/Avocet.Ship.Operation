import { PLATFORM } from 'aurelia-pal';

export class App {
  message = 'Hello World!';
  router;
  constructor() {
  }
  
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Stability and Trim';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: ['', 'home', 'rulesadmin'], name: 'home', moduleId: PLATFORM.moduleName('shipops'), nav: false, title: 'Home' },
      { route: 'dash', name: 'dash', moduleId: PLATFORM.moduleName('dash') },
      { route: 'shipops', name: 'shipops', moduleId: PLATFORM.moduleName('shipops') },
      { route: 'myships', name: 'myships', moduleId: PLATFORM.moduleName('myships') },
      { route: 'userlogin', name: 'userlogin', moduleId: PLATFORM.moduleName('userlogin') },
      { route: 'newobservation', name: 'newobservation', moduleId: PLATFORM.moduleName('newobservation') },
      { route: 'draftsurvey', name: 'draftsurvey', moduleId: PLATFORM.moduleName('draftsurvey') },
      { route: 'draftobservations', name: 'draftobservations', moduleId: PLATFORM.moduleName('draftobservations') },
      { route: 'nowhydro', name: 'nowhydro', moduleId: PLATFORM.moduleName('nowhydro') }

    ]);
  }

}
