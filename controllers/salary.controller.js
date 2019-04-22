const Salary = require('../models/salary.model');

exports.get_all_salaries = (req, res, next) => {
    Salary.find({})
    .populate('staff')
    .exec((err, salaries) =>{
        if (err){
          res.send(err);
        } else {
          res.status(200).json(salaries);
        }
    });
}

exports.get_salary_by_id = (req, res, next) => {
    Salary.findById( req.params.id )
    .populate('staff')
    .exec((err, salaries) => {
        if (err){
          res.send(err);
        } else {
          res.status(200).json(salaries);
        }
    });
}

exports.add_salary = (req, res, next) => {
    const newSalary = new Salary({
        amount: req.body.amount,
        staff: req.body.staff,
    });
    
    newSalary.save((err, Salary) => {
        if(err){
            res.send(err);
        }else{
            res.status(200).json(Salary);
        }
    });
}