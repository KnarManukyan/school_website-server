const express = require('express');
const models = require("../models");
const sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

exports.login = function(req,res){
  var email= req.body.email;
  var password = req.body.password;
  models.User.findOne({where : {email: email}})
  .then((results) => {
    if(results == null)
    {
      res.send({
        "message":"Email does not exits"
        });
    }
    else{
      if(Object.keys(results).length > 0)  {
        if(bcrypt.compareSync(password, results.password)){
          jwt.sign({results}, process.env.SECRET_KEY,  { expiresIn: '1h' }, function(err, token) {
            res.send({
              "code":200,
              "message":"successfully logged in",
              "token": token
            });
          });
        }
        else {
        res.send({
          "message":"Wrong password. Try again."
          });
        }
      }
    }
  })
  .catch(function(error){
    res.send({
      "error": error,
      "failed":"error occured"
    });
  });
}
