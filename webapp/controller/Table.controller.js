sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter",
  ],
  function (Controller, JSONModel, Filter, FilterOperator, Sorter) {
    "use strict";

    return Controller.extend("ui5.memories.controller.Table", {
      aFilters: [],
      aSorters: [],

      onInit: function () {
        var sPath = sap.ui.require.toUrl("ui5/memories/model/memories.json");
        fetch(sPath)
          .then((response) => response.json())
          .then((data) => {
            var oModel = new JSONModel(data);
            this.getView().setModel(oModel);
          })
          .catch((error) =>
            console.error("Error loading the JSON file:", error)
          );

        var oEventBus = sap.ui.getCore().getEventBus();
        oEventBus.subscribe("App", "Search", this.handleSearch, this);
        oEventBus.subscribe("App", "Sort", this.handleSort, this);
        oEventBus.subscribe(
          "App",
          "FilterPersonal",
          this.handlePersonalFilter,
          this
        );
      },

      applyFiltersAndSorters: function () {
        var oTable = this.getView().byId("memoriesTable");
        if (oTable) {
          var oBinding = oTable.getBinding("items");
          oBinding.filter(this.aFilters);
          oBinding.sort(this.aSorters);
        }
      },

      handleSearch: function (sChannelId, sEventId, oData) {
        var sQuery = oData.query;
        var oFilter = new Filter("name", FilterOperator.Contains, sQuery);
        this.aFilters = [oFilter];
        this.applyFiltersAndSorters();
      },

      handlePersonalFilter: function (sChannelId, sEventId, oData) {
        if (oData.filters) {
          this.aFilters = oData.filters;
        } else {
          this.aFilters = [];
        }
        this.applyFiltersAndSorters();
      },

      handleSort: function (sChannelId, sEventId, oData) {
        // Implement sorting logic here if needed
      },
    });
  }
);
