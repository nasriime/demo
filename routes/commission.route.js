const express = require('express');
const router = express.Router();
const Commision = require('../models/commission.model');

router.get('/',(req, res, next)=> {
    Commision.find({}, (err, commisions) =>{
        if (err){
          res.send(err);
        } else {
          res.status(200).json(commisions);
        }
      });
});

router.get('/:id',(req, res, next)=> {
    Commision.findById(req.params.id , (err, commisions) =>{
        if (err){
          res.send(err);
        } else {
          res.status(200).json(commisions);
        }
    });
});

router.post('/',(req, res, next)=> {
    const newCommision = new Commision({
        amount: req.body.amount,
        staffId: req.body.staffId,
    });
    
    newCommision.save((err, commission) => {
        if(err){
            res.send('Error has occured');
        }else{
            res.status(200).json(commission);
        }
    });
});

module.exports = router;





