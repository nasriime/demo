const axios = require('axios');
const express = require('express');
const staff = require('../public/javascripts/staff.json');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('index', { title: 'Express' });
});

router.get('/staff',(req, res, next)=> {
  res.status(200).json(staff);
});

router.get('/customer/:id',(req,res,next)=> {
  axios.get('http://86.96.197.228:9003/tawkeel/api/pros/'+req.params.id)
  .then(response => {
    console.log(response);
    res.status(200).send(response);
  })
  .catch( error => {
    console.log(error);
    res.send(error);
  });
});

router.post('/customer',(req,res,next)=> {
  const body = {
    proNameAr : req.body.proNameAr,
    proNameEn : req.body.proNameEn,
    eida : req.body.eida,
    email : req.body.email,
    genderId : req.body.genderId,
    proCategoryId : req.body.proCategoryId,
    languageCode : req.body.languageCode,
    birthdate : req.body.birthdate,
    blocked : req.body.blocked,
    proStatusId : req.body.proStatusId,
    mobileNo : req.body.mobileNo,
    password : req.body.password,
    proImage : req.body.proImage
  }

  axios.post('/http://86.96.197.228:9003/tawkeel/api/pros/', body)
  .then(response => {
    console.log(response);
    res.status(201).json(response);
  })
  .catch( error => {
    console.log(error);
    res.send(error);
  });
})

module.exports = router;
