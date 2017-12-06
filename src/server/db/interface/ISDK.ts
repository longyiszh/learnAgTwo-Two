import { Document } from 'mongoose';

export interface ISDK extends Document {
  name: string,
  price?: string,
  platform?: string,
  receiver?: string,
  steveAttitude?: string
}