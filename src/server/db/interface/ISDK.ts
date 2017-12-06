import { Document } from 'mongoose';

export interface ISDK extends Document {
  name: string,
  price?: number,
  platform?: string,
  receiver?: string,
  steveAttitude?: string
}