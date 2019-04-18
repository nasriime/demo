var express = require('express');
var router = express.Router();
const Staff = require('../models/staff.model');

router.get('/', (req, res, next) => {
    Staff.find({}, (err, staff) =>{
        if (err){
          res.send(err);
        } else {
          res.status(200).json(staff);
        }
    });
});

router.get('/:id', (req, res, next) => {
    Staff.findOne( {id: req.params.id } , (err, staff) => {
        if (err){
          res.send(err);
        } else {
          res.status(200).json(staff);
        }
    });
});

router.post('/',(req, res, next) => {
    const newStaff = new Staff({
        id: req.body.id,
        name: req.body.name,
        department: req.body.department
    });
    
    newStaff.save((err, Salary) => {
        if(err){
            res.send(err);
        }else{
            res.status(200).json(Salary);
        }
    });
});

module.exports = router;
