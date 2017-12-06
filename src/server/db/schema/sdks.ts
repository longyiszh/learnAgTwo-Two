import { model, Schema } from 'mongoose';

import { ISDK } from "../interface/ISDK";

const sdkSchema: Schema = new Schema({
  name: {
      type: String,
      required: true
  },
  price: {
      type: String,
      required: false
  },
  platform: {
      type: String,
      required: false
  },
  receiver: {
      type: String,
      required: false
  },
  steveAttitude: {
      type: String,
      required: false
  },
});

export const sdks = model<ISDK>('jinmoes', sdkSchema);
