/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import formatter from "../model/formatter";
// import ODataModel from "sap/ui/model/odata/v4/ODataModel";
import JSONModel from "sap/ui/model/json/JSONModel";
import ODataModel from "sap/ui/model/odata/v4/ODataModel";
import MessageToast from "sap/m/MessageToast";

/**
 * @namespace MyApp.MyApp.controller
 */

interface oData {
	Carrid: string;
	Carrname: string;
	Currcode: string;
	Url: string;
}

interface Login {
	CompanyDB: string;
	Password: string;
	UserName: string;
}

interface CoinGeckoPing {
	gecko_says: string;
}

export default class Main extends BaseController {
	private formatter = formatter;

	public sayHello(): void {
		MessageBox.show("Hello World!");
	}

	public async showHello(): Promise<void> {
		try {
			const oModel = new JSONModel();
			console.log(await oModel.dataLoaded());
		}
		catch (e) {
			console.log(e);
		}

	}

	onPress(oEvent: Event): void {
		console.log("Navigation")
		var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("overview");
	  }
	  

	public async sayGecko(): Promise<void> {
		try {
		  const oModel = new JSONModel();
		  await oModel.loadData("https://api.coingecko.com/api/v3/ping", {}, true, "GET", false, false, {
			"Content-Type": "application/json"
		  });
	  
		  const oData: CoinGeckoPing = oModel.getData();
	  
		  if (oData && oData.gecko_says) {
			MessageToast.show("CoinGecko says: " + oData.gecko_says);
			console.log(oData.gecko_says);
		  } else {
			throw new Error("Invalid response from CoinGecko API");
		  }
		} catch (error) {
		  console.error("Error fetching data from CoinGecko API:", error);
		  // Handle the error or display an error message
		}
	  }

	public async onInit(): Promise<void> {
		let oModel = new JSONModel();
		await oModel.loadData("http://localhost:5000/User",{}, true, "GET", false, false, {
			"Contet-Type":"application/json"
		});

		// const oData = oModel.getData();

		this.getView().setModel(oModel, "users");

		// console.log(oData);


		// let oModel = new JSONModel();
		// oModel.loadData("https://api.coingecko.com/api/v3/ping", {}, true, "GET", false, false, {
		// 	"Content-Type": "application/json"
		// });

		// oModel.attachRequestCompleted(function () {
		// 	var oData: CoinGeckoPing = oModel.getData();
		// 	MessageToast.show("CoinGecko says: " + oData.gecko_says);
		// 	console.log(oData.gecko_says);
		// })

		// oModel.attachRequestFailed(function (oEvent: any) {
		// 	// API call error
		// 	var oParams = oEvent.getParameters();
		// 	var sErrorText = oParams.responseText;
		// 	// Handle the error message as needed
		// 	MessageToast.show("API call failed: " + sErrorText);
		// });

		// async function postData(url: string, data: any): Promise<any> {
		// 	const response = await fetch(url, {
		// 	  method: "POST",
		// 	  body: JSON.stringify(data),
		// 	  headers: {
		// 		"Content-Type": "application/json",
		// 	  },
		// 	});

			
		

		// let oModel = new ODataModel({serviceUrl: "https://api.coingecko.com/api/v3/ping"});
		// let oModel = new ODataModel("https://api.coingecko.com/api/v3/ping", true);
		// apply content density mode to root view
		// let json: string;
		// const oModel = new JSONModel("https://api.coingecko.com/api/v3/ping");
		// let response = oModel.getProperty("/gecko_says")
		// console.log(response);
		// console.log(oModel);
		// // oModel.setJSON(json);


		// //Create
		// //Initialise the JSON model object
		// const myJSONModel = new JSONModel();

		// //Add data to the JSON model
		// myJSONModel.setData({ name: "John", age: 30 });
		// console.log(myJSONModel);

		// //Read
		// //Get property from the model 
		// let name = myJSONModel.getProperty("/name");
		// console.log(name);

		// //Update
		// //Set the data
		// myJSONModel.setProperty("/name", "Chris");

		// //Delete
		// //Remove a property 
		// myJSONModel.setProperty("/age", null);

		// console.log(oModel.getJSON());
		// console.log(oModel.setJSON(json));

		// const oModelPost = new ODataModel({ json: true, useBatch: false, serviceUrl: "https://api.coingecko.com/api/v3" });
		// oModelPost.read("/ping", {
		// 	success: (data: oData) => {
		// 		console.log(data);
		// 	},
		// 	error: (e: any) => {
		// 		console.log(e);
		// 	}
		// })

		// const oMetaData = oModelPost.getServiceMetadata();
		// oModelPost.read('/ping', {
		// 	success: (data: oData) => {
		// 		console.log(data);
		// 	},
		// 	error: (e: any) => {console.log(e); }
		// })



		// let oEntry: oData;
		// oEntry.Carrid = "AFO";
		// oEntry.Carrname = "Airforce One";
		// oEntry.Currcode = "USD";
		// oEntry.Url = "www.techippo.com";

		// oModelPost.setHeaders({
		// 	"Content-Type":"application/json"
		// })

		// oModelPost.create("/Login", oEntry, {
		// 	success: (data: oData) => {
		// 		console.log(data);
		// 	},
		// 	error: (e: any) => {
		// 		console.log(e);
		// 	}
		// });
	}

}
