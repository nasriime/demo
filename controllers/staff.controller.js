const Staff = require('../models/staff.model');
const staffSeeder = require('../models/staff-seeder');

exports.get_all_staff = (req, res, next) => {
    staffSeeder.seeder();
    Staff.find({}, (err, staff) =>{
        if (err){
          res.send(err);
        } else {
          res.status(200).json(staff);
        }
    });
}

exports.get_department = (req, res, next) => {
    const deptName = req.query.deptName;
    if( deptName ){
        Staff.aggregate([
            {
                $match: { 
                    department: deptName 
                }
            },
            {
                $group: { 
                    _id: "$department",
                    count: {"$sum": 1}}
            }
        ], (err, staff) =>{
            if (err){
              res.send(err);
            } else {
              res.status(200).json(staff);
            }
        });
    }else{
        Staff.aggregate([
            {
                $group: { 
                    _id: "$department",
                    count: {"$sum": 1}}
            }
        ], (err, staff) =>{
            if (err){
              res.send(err);
            } else {
              res.status(200).json(staff);
            }
        });
    }
    
}

exports.get_staff_by_id = (req, res, next) => {
    Staff.findOne( {id: req.params.id } , (err, staff) => {
        if (err){
          res.send(err);
        } else {
          res.status(200).json(staff);
        }
    });
}

exports.add_staff = (req, res, next) => {
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
}