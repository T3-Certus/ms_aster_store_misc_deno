import { RouterContext, Context } from "https://deno.land/x/oak@v12.1.0/mod.ts"

export type RouterCtx = RouterContext<"/", Record<string | number, string | undefined>, Record<string, any>>

export type Ctx = Context<Record<string, any>, Record<string, any>>
export type Next = () => Promise<unknown>