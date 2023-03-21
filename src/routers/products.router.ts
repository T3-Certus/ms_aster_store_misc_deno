import { Router } from "https://deno.land/x/oak@v12.1.0/mod.ts"
import { ServiceControllers } from "../controllers/service.controller.ts"

export function ProductsRouter() {
  const productsGroup = new Router({ prefix: "/v1/products" })
  const serviceControllers = new ServiceControllers()

  productsGroup.get('/getCategories', serviceControllers.getProductCategories)

  return productsGroup
}