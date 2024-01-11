import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
//
const name = process.env.POSTGRES_USERNAME || "";
const password = process.env.POSTGRES_PASSWORD || "";
const sequelize = new Sequelize("postgres", name, password, {
  host: "localhost",
  dialect: "postgres",
});

const connectPostGresDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connect PostGres DB Success! ");
  } catch (error) {
    console.log("Connect Postgres Fail !");
    console.log("Error :", error);
  }
};

export default connectPostGresDB;
