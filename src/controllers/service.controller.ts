import { RouterCtx } from "../utils/types/types.ts";

export class ServiceControllers {
  public async getProductCategories(ctx: RouterCtx) {
    ctx.routerPath = "/getProductCategories"
    const { searchParams } = ctx.request.url

    const id_product_category = searchParams.get("id_product_category")
    const product_category_name = searchParams.get("product_category_name")

    ctx.response.body = {
      id_product_category,
      product_category_name,
    }


  }
}