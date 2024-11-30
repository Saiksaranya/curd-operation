const Employee = require('../models/Employee');

// Add Employee
exports.addEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Employee
exports.deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json({ message: 'Employee deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get Employee by Name
exports.getEmployeeByName = async (req, res) => {
  try {
    const { name } = req.params;
    const employee = await Employee.findOne({ name });
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json(employee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getHighestSalaryEmployee = async (req, res) => {
  try {
    const employee = await Employee.findOne().sort({ salary: -1 });
    if (!employee) return res.status(404).json({ message: 'No employees found' });
    res.json(employee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
