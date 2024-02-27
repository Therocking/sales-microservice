import { MongoDb } from "./adapters/connectDb.adapter";
import { envs } from "./adapters/envs.adapter";
import { Server } from "./models/server";
import AppRoutes from "./routes";

class Main {
  public static async MainStart() {
    await MongoDb.Connect({
      mongoUrl: envs.MONGO_URL,
      mongoDbName: envs.MONGO_DB_NAME
    })
    
    const server = new Server({
      port: envs.PORT,
      routes: AppRoutes.Routes
    })

    server.Start()
  }
}

Main.MainStart()
