sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
  "use strict";

  return UIComponent.extend("ui5.memories.Component", {
    metadata: {
      manifest: "json",
    },

    /**
     * Il componente viene inizializzato automaticamente da UI5 durante l'avvio dell'app e chiama il metodo init una volta.
     */
    init: function () {
      // chiama la funzione init del componente base
      UIComponent.prototype.init.apply(this, arguments);

      // Qui puoi mantenere altre inizializzazioni specifiche necessarie solo per la tua vista
      this.getRouter().initialize();
    },
  });
});
