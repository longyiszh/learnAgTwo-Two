import * as path from 'path';

import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as logger from 'koa-logger';
import * as send from 'koa-send';
import * as serve from 'koa-static';

// db
import { initDB } from './db/index';

import { api } from './router/api';

const app = new Koa();
const router = new Router();

const clientPath = path.join(__dirname, "../client");

app.use(logger());
// app.use(bodyParser());
app.use(serve(clientPath));

// root route and sub route settings

router.use('/api', api.routes(), api.allowedMethods())
router.get('/*', async (ctx, next) => {
  await send(ctx, path.join(clientPath, 'index.html'), { root: '/' });
});

app.use(router.routes())
.use(router.allowedMethods());

// listen
app.listen(3000, () => {
  console.log("** koa started on port 3000. **");
});

(
  async () => {
    try {
      const info = await initDB();
    } catch (err) {
      console.error(err);
    }
  }
)();

export default app;