import * as fs from "fs";
import * as path from "path";

import { connectDB } from './data-access';

// read settings synclly first
const file: string = path.join(__dirname, './config/learn-ag-two-two.json');
const file0: string = path.join(__dirname, './config/learn-ag-two-two-default.json');
let siteConfig: any[];

try {
  siteConfig = JSON.parse(fs.readFileSync(file, 'utf8'));
} catch (error) {
  console.warn("Error reading your site config file, falling to the default one.");
  siteConfig = JSON.parse(fs.readFileSync(file0, 'utf8'));
}

const conf = siteConfig[0];

export const initDB = async () => {
  await connectDB(conf.mongo);
}
