const express = require('express');
const router = express.Router();
const db = require("../models");

//get all the res
router.get('/spas', function(req, res) {
  db.Spa.findAll({ 
  }).then(function(data) {
    var hbsObject = {spas: data};
    res.render('spas', hbsObject);
  });
});

//adding a res to the list
router.post('/spas', function(req, res) {
	db.Spa.create({
	name: req.body.name,
	phone: req.body.phone,
	email: req.body.email,
  service: req.body.service,
  res_time: req.body.res_time,
 }).then(function(data) {
 	  db.Spa.update({
      GuestId: data.dataValues.id,
      available: false
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(data) {
      res.redirect('/spas');
    });
  });
});

//delete a res
router.delete("/spas/:id", function(req, res) {
  return db.Spa.destroy({
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.redirect('/spas');
  });
});

module.exports = router;