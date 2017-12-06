import * as mongoose from "mongoose";

(<any>mongoose).Promise = global.Promise;
/**
 * 
 * @param config config mongo part object
 */
export const connectDB = (config: any) => {
  /*
    example config:
  {
    "db": "mim",
    "authDB": "[admin Auth Database]",
    "user": "[rootUser]",
    "password": "[your password]",
    "port": 27017
  }
  */
  const uri = `mongodb://${ config.user }:${ config.password }@localhost/${ config.db }?authSource=${ config.authDB }`;
  return new Promise((resolve, reject) => {
    mongoose.connect(uri, {
      useMongoClient: true
    });

    mongoose.connection.on('error', (error: Error) => reject(error))
      .on('close', () => console.log(`Connection to ${ config.db } has been closed.`))
      .once('open', () => {
        console.log(`Connection to ${ config.db } established successfully.`);
        resolve(mongoose.connection);
      });

  });
}
