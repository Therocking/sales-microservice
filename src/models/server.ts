import express, { Router } from "express";

interface ServerOpts {
  port: number
  routes: Router
}

export class Server {
  private readonly App = express()
  private readonly Port: number
  private readonly Routes: Router

  constructor(opts: ServerOpts) {
    this.Port = opts.port,
    this.Routes = opts.routes
  }

  public Start(): void {
    this.App.use(express.json())
    this.App.use(this.Routes)

    this.Listen()
  }

  private Listen() {
    this.App.listen(this.Port, () => {
      console.log(`Server running on port${this.Port}`)
    })
  }
}
