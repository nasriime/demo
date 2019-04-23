const express = require('express');
const router = express.Router();
const SalaryController = require('../controllers/salary.controller');

router.get('/', SalaryController.get_all_salaries);

router.get('/:id', SalaryController.get_salary_by_id );

router.post('/', SalaryController.add_salary);

module.exports = router;