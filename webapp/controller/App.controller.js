sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("DemoProject.DemoProject.controller.App", {
		onInit: function () {
			// var otable=this.getView().byId("table");
			// otable.bindElement("Model>ProductSet('HT-1000')");
		},
		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Details", {
				PrdId: oItem.getModel().getData(oItem.getBindingContext().getPath()).ProductID
			});
		},
		goToDetails: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Details");

		}
	});
});