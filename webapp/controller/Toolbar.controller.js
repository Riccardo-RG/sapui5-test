sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("ui5.memories.controller.Toolbar", {
      onSearch: function (oEvent) {
        var sQuery = oEvent.getSource().getValue();
        var oEventBus = sap.ui.getCore().getEventBus();
        oEventBus.publish("App", "Search", {
          query: sQuery,
        });
      },

      onPersonalChange: function (oEvent) {
        var aSelectedKeys = oEvent.getSource().getSelectedKeys();
        var aFilters = [];

        if (aSelectedKeys.length > 0) {
          aSelectedKeys.forEach(function (key) {
            if (key === "personal") {
              aFilters.push(
                new sap.ui.model.Filter(
                  "isPersonal",
                  sap.ui.model.FilterOperator.EQ,
                  true
                )
              );
            } else if (key === "others") {
              aFilters.push(
                new sap.ui.model.Filter(
                  "isPersonal",
                  sap.ui.model.FilterOperator.EQ,
                  false
                )
              );
            }
          });
        } else {
          // Aggiungi un filtro che non corrisponde a nessun record per nascondere tutti gli elementi
          aFilters.push(
            new sap.ui.model.Filter("id", sap.ui.model.FilterOperator.EQ, null)
          );
        }

        var oEventBus = sap.ui.getCore().getEventBus();
        oEventBus.publish("App", "FilterPersonal", {
          filters: aFilters,
        });
      },
    });
  }
);
