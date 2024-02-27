import mongoose from "mongoose"

interface MongoConnectOpts {
  mongoUrl: string
  mongoDbName: string
}

export class MongoDb {
  static async Connect(connectOpts: MongoConnectOpts) {
    try {
      await mongoose.connect(connectOpts.mongoUrl, {
        dbName: connectOpts.mongoDbName
      })

      console.log("Mongo db connected")

    } catch (err) {
      console.log(err) 
    }
  }
}
