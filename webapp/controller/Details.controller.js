sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("DemoProject.DemoProject.controller.Details", {

		onInit: function () {
			this.getOwnerComponent().getRouter().getRoute("Details").attachPatternMatched(this.getPattern, this);
		},
		onNavBack: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RouteApp");
			/*history.go(-1);*/
		},
		getPattern: function (event) {
			var prodId = event.getParameter("arguments").PrdId;
			this.getView().bindElement({
				path: "/ProductSet('" + prodId + "')",
				parameters: {
					expand: 'ToSupplier,ToSalesOrderLineItems'
				}
			});

		}

	});

});