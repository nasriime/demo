const Staff = require('../models/staff.model');
const data = require(process.env.JSON);

exports.get_all_staff = (req, res, next) => {
    if(req.params.new == 1){
        let done = 0;
        for (let i = 0; i < data.staff.length; i++) {
            let staff = new Staff(data.staff[i]);
            staff.save(function(err, result) {
                done++;
                if (done === data.staff.length) {
                    Staff.find({}, (err, staff) =>{
                        if (err){
                          res.send(err);
                        } else {
                          res.status(200).json(staff);
                        }
                    });
                }
            });
        }
    }else{
        Staff.find({}, (err, staff) =>{
            if (err){
              res.send(err);
            } else {
              res.status(200).json(staff);
            }
        });
    }
    
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

exports.get_commission = (req, res, next) =>{

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
                    count: {"$sum": "$commission"}}
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
                    count: {"$sum": "$commission"}}
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

exports.get_salary = (req, res, next) =>{

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
                    count: {"$sum": "$salary"}}
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
                    count: {"$sum": "$salary"}}
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