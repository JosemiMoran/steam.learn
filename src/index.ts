import { Hono } from 'hono'
import { getXataClient } from './xata'
import { prettyJSON } from 'hono/pretty-json'

const app = new Hono()
const xata = getXataClient()
const user = xata.db.user.getAll()
app.use('*',prettyJSON())
app.get('/', c => c.text('steam'))
app.get('/user', async (c) => c.json((await user).map((u: { name: any }) => u.name)))

export default app
