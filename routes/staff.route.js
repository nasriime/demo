const express = require('express');
const router = express.Router();
const StaffController = require('../controllers/staff.controller');

router.get('/all/:new', StaffController.get_all_staff);

router.get('/department', StaffController.get_department);

router.get('/commission', StaffController.get_commission);

router.get('/salary', StaffController.get_salary);

router.get('/:id', StaffController.get_staff_by_id);

router.put('/:id', StaffController.update_staff);

router.post('/', StaffController.add_staff);

module.exports = router;
