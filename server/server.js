import config from "./../config/config";
import app from "./express";
import mongoose from "mongoose";

// Connection URL
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri);
if(mongoose.connect){
  console.info("Server started on port %s.", config.mongoUri);
}
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://127.0.0.1:27017/mernprojects");
// mongoose.connection.on('error', ()=> {
//   throw new Error(`unable to connect to database: ${config.mongoUri}`);
// } )

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
