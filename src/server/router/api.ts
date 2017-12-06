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

router.post('/sdk/add', async (ctx) => {
  let sdkToSave: any = {};
  let info = ctx.request.body;
  sdkToSave.name = info.name;
  if (info.price) sdkToSave.price = info.price;
  if (info.platform) sdkToSave.platform = info.platform;
  if (info.receiver) sdkToSave.receiver = info.receiver;
  if (info.steveAttitude) sdkToSave.steveAttitude = info.steveAttitude;

  let newsdk = new sdks(sdkToSave);
  try {
    await newsdk.save();
    let sdkid: string = newsdk._id;
    ctx.body = {
      status: 'success',
      sdkid: sdkid
    }
  } catch(error) {
    console.error(error);
    ctx.status = 500;
    ctx.body = {
      status: 'failure',
      cid: null
    }
  }
});

export const api = router;