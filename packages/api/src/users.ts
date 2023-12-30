import { Hono } from "hono";
import { getXataClient } from "../../db/src/xata";

const app = new Hono();
const xata = getXataClient();
const users = xata.db.user.getAll();
console.log(users);
app.get("/", async (c) => c.json(await users));
app.get('/:id', (c) => c.json(`get ${c.req.param('id')}`))
export default app;
