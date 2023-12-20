import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";
import users from "./users";

const port = Bun.env.PORT || 3000;
const app = new Hono().basePath('/v1');
app.use("*", prettyJSON());
app.route('/users',users)
console.log(app.routes);
console.log(app.all)
export default app;
