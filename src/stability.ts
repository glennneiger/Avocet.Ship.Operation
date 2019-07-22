import 'syncfusion-javascript/Scripts/ej/web/ej.grid.min';
import 'syncfusion-javascript/Scripts/ej/web/ej.ribbon.min';
export class Stability {
  message: string;
  gridData: any;
  ApplicationTab: any;
  Tabs:any;
  constructor() {
    this.ApplicationTab = { type: ej.Ribbon.ApplicationTabType.Menu, menuItemID: "ribbonMenu" };
    this.Tabs =  [{
      id: 'draft', text: 'Draft Survey', groups: [{
        text: "Select Ship",
        content: [{
          groups: [{
            id: "selectship",
            text: "Working Ship",
            buttonSettings: {
              contentType: ej.ContentType.TextAndImage,
              prefixIcon: "e-icon e-ribbon e-new",
              width:100
            }
          }]
        }]
      },
        {
          text: "Select Ship",
          content: [{
            groups: [{
              id: "seleccctship",
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
              id: "seleddctship",
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
        id: 'stability', text: 'Stability & Trim', groups: [{
            text: "Select Ship",
            content: [{
              groups: [{
                id: "selectsddhip",
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
                  width: 100
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
    this.gridData = [{
        OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5,
        OrderDate: new Date(8364186e5), Freight: 32.38
      },
      {
        OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6,
        OrderDate: new Date(836505e6), Freight: 11.61
      },
      {
        OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4,
        OrderDate: new Date(8367642e5), Freight: 65.83
      },
      {
        OrderID: 10251, CustomerID: 'VICTE', EmployeeID: 3,
        OrderDate: new Date(8367642e5), Freight: 41.34
      },
      {
        OrderID: 10252, CustomerID: 'SUPRD', EmployeeID: 4,
        OrderDate: new Date(8368506e5), Freight: 51.3
      }];
  }
}
