const express = require('express');
const router = express.Router();
const {
  addEmployee,
  deleteEmployee,
  getEmployeeByName,
  getHighestSalaryEmployee,
} = require('../controllers/employeeController');

router.post('/employees', addEmployee);
router.delete('/employees/:id', deleteEmployee);
router.get('/employees/name/:name', getEmployeeByName);
router.get('/employees/highest-salary', getHighestSalaryEmployee);

module.exports = router;
