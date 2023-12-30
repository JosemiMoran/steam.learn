import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";
import users from "./users";
import {handle} from 'hono/vercel'
export const runtime = "edge";
const hono = new Hono().basePath('/api');
hono.use("*", prettyJSON());
const route = hono.route('/users',users)

console.log(hono.all)
export default {
    port: 3000,
    fetch: hono.fetch,
  };
export type AppType = typeof route;

