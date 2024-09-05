sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent"],
  function (Controller, UIComponent) {
    "use strict";

    return Controller.extend("ui5.memories.controller.Home", {
      onInit: function () {},

      onDisplayNotFound: function () {
        var oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("displayNotFound");
      },

      onNavToEmployees: function () {
        var oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("newMemories");
      },
    });
  }
);
