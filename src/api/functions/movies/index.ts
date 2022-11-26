const { Router } = require('express');
import { getPopular, getTop } from '../../services/movieHandler';

const router = Router();

router.get('/popular/:page', getPopular)
router.get('/topRated/:page', getTop)

module.exports = router;
