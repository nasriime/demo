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