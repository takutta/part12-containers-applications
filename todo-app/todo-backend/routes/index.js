const redis = require('../redis')
const express = require('express');
const router = express.Router();

const configs = require('../util/config');

/* GET index data. */
router.get('/', async (req, res) => {
  let visitsBefore = await redis.getAsync('visits');
  if (visitsBefore === null) {
    visitsBefore = 0;
  }
  let visits = Number(visitsBefore) + 1
  await redis.setAsync('visits', visits);
  res.send({
    ...configs,
    visits
  });
});

module.exports = router;
