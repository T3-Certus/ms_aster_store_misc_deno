import { Application, Router } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import logger from "https://deno.land/x/oak_logger@1.0.0/mod.ts";
import { LoggerMiddleware } from "./middlewares/logger.middleware.ts";
import { ProductsRouter } from "./routers/products.router.ts";

export function App() {
  const app = new Application()

  const router = new Router()

  app.use(LoggerMiddleware)
  app.use(logger.logger)
  // app.use(logger.responseTime)

  app.use(router.allowedMethods())
  app.use(ProductsRouter().routes())

  return app
}