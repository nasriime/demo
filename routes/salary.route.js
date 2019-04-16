var express = require('express');
var router = express.Router();
const Salary = require('../models/salary.model');

router.get('/salary', (req, res, next) => {
    Salary.find({}, (err, salaries) =>{
        if (err){
          res.send(err);
        } else {
          res.status(200).json(salaries);
        }
    });
});

router.get('/salary/:id', (req, res, next) => {
    Salary.findById( req.params.id , (err, salaries) => {
        if (err){
          res.send(err);
        } else {
          res.status(200).json(salaries);
        }
    });
});

router.post('/salary',(req, res, next) => {
    const newSalary = new Salary({
        amount: req.body.amount,
        staffId: req.body.staffId,
    });
    
    newSalary.save((err, Salary) => {
        if(err){
            res.send('Error has occured');
        }else{
            res.status(200).json(Salary);
        }
    });
});

module.exports = router;
