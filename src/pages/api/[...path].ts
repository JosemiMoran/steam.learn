import { Hono } from "hono";
import type {APIRoute} from 'astro';
import { prettyJSON } from "hono/pretty-json";
import {showRoutes } from 'hono/dev'
import users from "./users";

const hono = new Hono().basePath('/api/v1');
hono.use("*", prettyJSON());
hono.route("/users", users);

showRoutes(hono);
export type RouteType = typeof hono;
export const ALL: APIRoute = (context) => hono.fetch(context.request);