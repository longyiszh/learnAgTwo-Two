const mongoose = require("mongoose");
const SDK = require('./schemas/SDK');

mongoose.Promise = global.Promise;

const db = "CDK";

const mgInstance = mongoose.connect(`mongodb://localhost/${ db }`);

mongoose.connection
.once('open', () => {
    console.log(`Connection to ${ db } established successfully.`);
})
.on('error', (error) => {
    console.error(error);
})
;

module.exports = mgInstance;