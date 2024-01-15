import { Hono } from "hono";
import {getXataClient} from "../../xata";
const app = new Hono();
const xata = getXataClient();
app.get('/', async (c) => c.json(await xata.db.user.getAll()))
app.get('/:id', async (c) => c.json(await xata.db.user.read(c.req.param('id'))))
export default app;
//rec_cm03c0trjuue4mojqd00