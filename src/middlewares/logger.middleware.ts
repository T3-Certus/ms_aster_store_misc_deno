import {
  green,
  cyan,
  red,
  yellow
} from "https://deno.land/std@0.53.0/fmt/colors.ts";
import { format } from "https://deno.land/std/datetime/mod.ts";

import { Ctx } from "../utils/types/types.ts";
import { Next } from "../utils/types/types.ts";

export async function LoggerMiddleware(ctx: Ctx, next: Next) {
  const start = Date.now();

  await next();

  const responseTime = Date.now() - start;

  const formattedDateTime = format(new Date(Date.now()), "MM-dd-yyyy HH:mm:ss.SSS");

  const logString = `[${formattedDateTime}] ${ctx.request.method} ${ctx.request.url.pathname} ${ctx.response.status} ${responseTime}ms  `

  const responseBody = await ctx.response.body

  if (ctx.response.status >= 500) {
    console.log(red(logString));
  } else if (ctx.response.status >= 400) {
    console.log(yellow(logString));
  } else if (ctx.response.status >= 300) {
    console.log(cyan(logString));
  } else if (ctx.response.status >= 200) {
    console.log(green(logString));
  } else if (ctx.response.status >= 100) {
    console.log(logString);
  }

  console.log("Response: ", responseBody)
}