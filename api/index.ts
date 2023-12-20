import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";
import users from "./users";

const port = Bun.env.PORT || 3000;
const app = new Hono();
app.use("*", prettyJSON());
app.route('/v1/users',users)
export default app;
