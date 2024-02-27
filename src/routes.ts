import { Router } from "express"
import { SalesRoutes } from "./presentation/routes/sales.routes"


class AppRoutes {

   static get Routes(): Router {
      const routes = Router()

      routes.use("/api/sales", SalesRoutes.Routes)

      return routes
   }
}

export default AppRoutes
