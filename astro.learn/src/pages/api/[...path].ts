import { Hono } from "hono";
import type {APIRoute} from 'astro';
import { prettyJSON } from "hono/pretty-json";
import {showRoutes } from 'hono/dev'
import {getXataClient} from "../../xata";


const hono = new Hono().basePath('/api');
hono.use("*", prettyJSON());
const xata = getXataClient();
const users = xata.db.user.getAll();
hono.get("/", async (c) => c.json(await users));
hono.get('/:id', (c) => c.json(`get ${c.req.param('id')}`))

//console.log(hono.all);
//showRoutes(hono);
export type RouteType = typeof hono;
export const ALL: APIRoute = (context) => hono.fetch(context.request);