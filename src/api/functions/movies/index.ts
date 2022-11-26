const { Router } = require('express');
import {
  getPopular,
  getTop,
  getUpcoming,
} from '../../services/movieHandler';

const router = Router();

router.get('/popular/:page', getPopular)
router.get('/topRated/:page', getTop)
router.get('/upcoming/:page', getUpcoming)

module.exports = router;
