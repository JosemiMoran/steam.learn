import { Hono } from "hono";
import {getXataClient} from "../../xata";
const app = new Hono();
const xata = getXataClient();
const users = xata.db.user.getAll();
app.get("/", async (c) => c.json(await users));
app.get('/:id', (c) => c.json(`get ${c.req.param('id')}`))
export default app;
