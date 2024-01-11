import { connect } from "mongoose";
import connectPostGresDB from "./postgres.connect";
require("dotenv").config();
// URL MONGO CLOUD
//const URL_MONGO_DATABASE_CLOUD: string = process.env.URL_MONGO_DATABASE_CLOUD || ''
//
const URL_MONGO_DATABASE_LOCAL: string = process.env.URL_MONGO_DATABASE_LOCAL || "";
//
// Define the options for the MongoDB connection

// CONNECT INSTANCE MONGODB
class DataBase {
  //
  constructor() {}

  public async connect() {
    await this.connectLocal();
    //await this.connectPostGres();
  }
  public async connectPostGres() {
    await connectPostGresDB();
  }
  //
  // private async connectCloud() {
  //    try {
  //       await connect(URL_MONGO_DATABASE_CLOUD, {
  //          maxPoolSize: 100,
  //       })
  //       console.log('ConnectDB_Mongo Cloud Success!')
  //    } catch (error) {
  //       console.log(`Error:${error}`)
  //    }
  // }
  //
  private async connectLocal() {
    try {
      await connect(URL_MONGO_DATABASE_LOCAL, {
        maxPoolSize: 10,
      });
      console.log("ConnectDB_Mongo Local Success!");
    } catch (error) {
      console.log(`Error:${error}`);
    }
  }
  //
  private static instance: any;
  //
  public static getInstance() {
    if (!DataBase.instance) {
      DataBase.instance = new DataBase();
    }
    return DataBase.instance;
  }
}
//
//const instanceDataBase = DataBase.getInstance();
//
export default new DataBase();
