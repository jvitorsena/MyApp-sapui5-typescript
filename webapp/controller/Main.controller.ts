/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import formatter from "../model/formatter";
import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import JSONModel from "sap/ui/model/json/JSONModel";

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
export default class Main extends BaseController {
	private formatter = formatter;

	public sayHello() : void {
		MessageBox.show("Hello World!");
	}


	public async showHello(): Promise<void>{
		try {
			const oModel = new JSONModel();
			console.log(await oModel.dataLoaded());
		}
		catch (e) {
			console.log(e);
		}
		
	}
	
	public onInit() : void {
		// apply content density mode to root view
		let json: string;
		const oModel = new JSONModel("https://api.coingecko.com/api/v3/ping")
		// oModel.setJSON(json);

		// console.log(oModel.getJSON());
		// console.log(oModel.setJSON(json));

		// const oModelPost = new ODataModel("https://192.168.12.36:50000/b1s/v1");
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
