import { Hono } from "hono";
import { getXataClient } from "../db/xata";
import { prettyJSON } from "hono/pretty-json";

const app = new Hono();
const xata = getXataClient();
const users = xata.db.user.getAll();
console.log(users);
app.get("/", async (c) => c.json(await users));
app.get('/:id', (c) => c.json(`get ${c.req.param('id')}`))
export default app;
