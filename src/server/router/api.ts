import * as Router from 'koa-router';

// import schemas
import { sdks } from '../db/schema/sdks';

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = "api works"
});

router.get('/sdk', async (ctx) => {
  let metSDKs = await sdks.find();
  ctx.body = metSDKs;
});

export const api = router;