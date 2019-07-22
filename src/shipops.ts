import 'syncfusion-javascript/Scripts/ej/web/ej.grid.min';
import 'syncfusion-javascript/Scripts/ej/web/ej.ribbon.min';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
@inject(EventAggregator)

export class Shipops {
  message: string;
  gridData: any;
  ApplicationTab: any;
  Tabs: any;
  ea;
  currentViewModelPath="myships";

  constructor(EventAggregator) {
    this.ea = EventAggregator;
    let subscription = this.ea.subscribe('gotonewobs', response => {
      this.currentViewModelPath = "newobservation";
    });

    this.ApplicationTab = {
      type: ej.Ribbon.ApplicationTabType.Menu, menuItemID: "ribbonMenu", menuSettings: {
        openOnClick: false
      }, tabClick: function (args) {alert("hambali") }
    };
    this.Tabs = [{
      id: 'draft', text: 'Draft Survey', groups: [{
        text: "Ship List",
        content: [{
          groups: [{
            id: "selectship",
            text: "Ship List",
            buttonSettings: {
              contentType: ej.ContentType.TextAndImage,
              prefixIcon: "e-icon e-ribbon e-new",
              click:"this.helloAction()",
              width: 100
            }
          }]
        }]
      }
      ]
    },
    {
      id: 'stability', text: 'Stability & Trim', groups: [{
        text: "Select Ship",
        content: [{
          groups: [{
            id: "selectsddhip",
            text: "Working Ship",
            buttonSettings: {
              contentType: ej.ContentType.TextAndImage,
              prefixIcon: "e-icon e-ribbon e-new",
              width: 100,
              click: function (args) { this.helloAction(args) }
            }
          }]
        }]
      },
      {
        text: "Select Ship",
        content: [{
          groups: [{
            id: "seleccctdship",
            text: "Working Ship",
            buttonSettings: {
              contentType: ej.ContentType.TextAndImage,
              prefixIcon: "e-icon e-ribbon e-new",
              width: 100
            }
          }]
        }]
      },
      {
        text: "Select Ship",
        content: [{
          groups: [{
            id: "seleddctsdhip",
            text: "Working Ship",
            buttonSettings: {
              contentType: ej.ContentType.TextAndImage,
              prefixIcon: "e-icon e-ribbon e-new",
              width: 100
            }
          }]
        }]
      }

      ]
    },
    {
      id: 'shipbank', text: 'Ship Bank', groups: [{
        text: "All Ships",
        content: [{
          groups: [{
            id: "selectsfdfhip",
            text: "Ship List",
            buttonSettings: {
              contentType: ej.ContentType.TextAndImage,
              prefixIcon: "e-icon e-ribbon e7ed",
              width: 100,
              click: function (args) { alert(args) }
            }
          }]
        }]
      },
      {
        text: "Hydrostatic",
        content: [{
          groups: [{
            id: "seleccdfctship",
            text: "Hydro Data",
            buttonSettings: {
              contentType: ej.ContentType.TextAndImage,
              prefixIcon: "e-icon e-ribbon e-new",
              width: 100
            }
          }]
        }]
      },
      {
        text: "Tanks Information",
        content: [{
          groups: [{
            id: "seleddcdftship",
            text: "Tanks",
            buttonSettings: {
              contentType: ej.ContentType.TextAndImage,
              prefixIcon: "e-icon e-ribbon e-new",
              width: 100
            }
          }]
        }]
      },
      {
        text: "Cross Curves",
        content: [{
          groups: [{
            id: "seleddcdftship",
            text: "Cross Curves",
            buttonSettings: {
              contentType: ej.ContentType.TextAndImage,
              prefixIcon: "e-icon e-ribbon e-new",
              width: 100
            }
          }]
        }]
      }

      ]
    }

    ];
   

    this.message = 'Hello world';
  }

  helloAction(arg) {
    alert("hello");
  }

}
