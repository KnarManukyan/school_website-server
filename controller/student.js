const express = require('express');
const models = require("../models");
const sequelize = require('sequelize');

exports.getStudents = function(req,res){
  models.Student.findAll(
    {
      include: ['Classes'],
      attributes: ['id', 'firstName', 'lastName', 'age', 'gender', 'phone', 'email', 'classId' ]
    })
    .then(function(students) {
          res.send(students)

       }).error(function (err) {
           console.log("Error:" + err);
       });
  }

exports.addStudent = function(req,res) {
  models.Student.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    gender: req.body.gender,
    phone: req.body.phone,
    email: req.body.email,
    classId: req.body.classId
  }).then((student) => {
    res.send({
      "id": student.dataValues.id,
      "code":200,
      "message": `Student ${req.body.firstName} ${req.body.lastName} was added`
    });
  }).catch(function(error){
    res.send({
      "code":400,
      "message": "error occured while adding students"
    });
  });
}

exports.deleteStudent = function(req,res) {
  models.Student.destroy({
      where: {
        id: req.param('id')
     }
   }).then(() => {
    res.send({
      "code":200,
      "message": `Student was deleted`
    });
  }).catch(function(error){
    res.send({
      "code":400,
      "message": "error occured while deleting students"
    });
  });
}

exports.editStudent = function(req,res) {
  models.Student.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    gender: req.body.gender,
    phone: req.body.phone,
    email: req.body.email,
    classId: req.body.classId
  }, {
    where: {
      id: req.param('id')
    }
  }).then(() => {
    res.send({
      "code":200,
      "message": `Student ${req.body.firstName} ${req.body.lastName} was edited`
    });
  }).catch(function(error){
    res.send({
      "code":400,
      "message": "error occured while editing students"
    });
  });
}
