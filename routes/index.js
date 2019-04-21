const axios = require('axios');
const express = require('express');
const data = require('../public/javascripts/staff.json');
const router = express.Router();

// GET customer from external REST API
router.get('/customer/:id', async(req,res,next) => {
  try {
    const link = 'http://86.96.197.228:9003/tawkeel/api/pros/';
    const data = await axios.get( link + req.params.id);
    console.log('data', data)
    res.status(200).json(data.data);
  } catch(error){
    res.send(error);
  }
});

// POST customer to external REST API
router.post('/customer', async(req,res,next) => {
  try {
    const link = 'http://86.96.197.228:9003/tawkeel/api/pros/';
    const obj = {
      "proNameAr" : req.body.proNameAr,
      "proNameEn" : req.body.proNameEn,
      "eida" : req.body.eida,
      "email" : req.body.email,
      "genderId": req.body.genderId,
      "proCategoryId" : req.body.proCategoryId,
      "languageCode" : req.body.languageCode,
      "birthdate" : req.body.birthdate,
      "blocked" : req.body.blocked,
      "proStatusId" : req.body.proStatusId,
      "mobileNo" : req.body.mobileNo,
      "password" : req.body.password,
      "proImage" : req.body.proImage
    }
    const data = await axios.post(link, obj,{
        headers : {
          "Accept": "application/json",
          "Content-Type": "application/json",
        }
      });
    res.status(201).json(data.data)
  } catch(error){
    console.log(error);
    res.json(error);
  }
});

module.exports = router;
