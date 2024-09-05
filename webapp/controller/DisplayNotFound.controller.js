sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History"],
  function (Controller, History) {
    "use strict";

    return Controller.extend("ui5.memories.controller.DisplayNotFound", {
      onInit: function () {},

      onNavBack: function () {
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();

        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          this.getRouter().navTo("home", {}, true);
        }
      },

      getRouter: function () {
        return sap.ui.core.UIComponent.getRouterFor(this);
      },
    });
  }
);
