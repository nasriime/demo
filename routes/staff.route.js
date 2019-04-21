const express = require('express');
const router = express.Router();
const StaffController = require('../controllers/staff.controller');

router.get('/', StaffController.get_all_staff);

router.get('/department', StaffController.get_department);

router.get('/:id', StaffController.get_staff_by_id);

router.post('/', StaffController.add_staff);

module.exports = router;
