const express = require('express');

const mgInstance = require('../../app/dataAccess/dataAccess');
const SDK = require('../../app/dataAccess/schemas/SDK');

const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/posts', (req, res) => {
  SDK.find().then((result)=> {
    res.send(result);
  });
});

module.exports = router;
