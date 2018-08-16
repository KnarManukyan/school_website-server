const express = require('express');
const models = require("../models");
const sequelize = require('sequelize');

exports.getTeachers = function(req,res){
  models.Teacher.findAll()
  .then(function (teacher) {
         res.send(teacher);

     }).error(function (err) {
         console.log("Error:" + err);
     });
}

exports.addTeacher = function(req,res) {
  models.Teacher.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email
  }).then((teacher) => {
    res.send({
      "id": teacher.dataValues.id,
      "code":200,
      "message": `Teacher ${req.body.firstName} ${req.body.lastName} was added`
    });
  }).catch(function(error){
    res.send({
      "code":400,
      "message": "error occured while adding teacher"
    });
  });
}

exports.deleteTeacher = function(req,res) {
  models.Teacher.destroy({
      where: {
        id: req.param('id')
     }
   }).then(() => {
    res.send({
      "code":200,
      "message": `Teacher was deleted`
    });
  }).catch(function(error){
    res.send({
      "code":400,
      "message": "error occured while deleting teacher"
    });
  });
}

exports.editTeacher = function(req,res) {
  models.Teacher.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email
  }, {
    where: {
      id: req.param('id')
    }
  }).then(() => {
    res.send({
      "code":200,
      "message": `Teacher ${req.body.firstName} ${req.body.lastName} was edited`
    });
  }).catch(function(error){
    res.send({
      "code":400,
      "message": "error occured while editing teacher"
    });
  });
}
