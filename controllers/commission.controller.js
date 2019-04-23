const Commision = require('../models/commission.model');

exports.get_all_commissions = (req, res, next)=> {
    Commision.find({})
    .populate('staff')
    .exec((err, commisions) =>{
      if (err){
        res.send(err);
      } else {
        res.status(200).json(commisions);
      }
    });
}

exports.get_department = (req, res, next)=>{
  const deptName = req.query.deptName;
    if( deptName ){
      Commision.aggregate([
            {
                $match: { 
                    department: deptName 
                }
            },
            {
              $group: { 
                  _id: "$department",
                  sum: {"$sum": "$staff.commission"}}
          }
            // {
            //    $lookup: {from: 'Staff', localField: 'amount', foreignField: 'department', as: 'total'} 
            // }
        ], (err, staff) =>{
            if (err){
              res.send(err);
            } else {
              res.status(200).json(staff);
            }
        });
    }else{
      Commision.aggregate([
            {
                $group: { 
                    _id: "$amount",
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

exports.get_commission_by_id = (req, res, next)=> {
    Commision.findById(req.params.id )
    .populate('staff')
    .exec((err, commisions) =>{
        if (err){
          res.send(err);
        } else {
          res.status(200).json(commisions);
        }
    });
}

exports.add_commission = (req, res, next)=> {
    const newCommision = new Commision({
        amount: req.body.amount,
        staff: req.body.staff,
    });

    newCommision.save((err, commission) => {
        if(err){
            res.send('Error has occured');
        }else{
            res.status(200).json(commission);
        }
    });
} 
