const { Router } = require('express');
import { getPopular } from '../../services/movieHandler';


const router = Router();

router.get('/popular/:page', getPopular)


module.exports = router;
