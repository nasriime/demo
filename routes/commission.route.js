const express = require('express');
const router = express.Router();
const CommisionController = require('../controllers/commission.controller')

router.get('/', CommisionController.get_all_commissions);

router.get('/:id', CommisionController.get_commission_by_id);

router.post('/', CommisionController.add_commission );

module.exports = router;





