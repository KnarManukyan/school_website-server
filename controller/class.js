const express = require('express');
const models = require("../models");
const sequelize = require('sequelize');

exports.getClasses = function(req,res){
  models.Classes.findAll(
    {
        include: ['Teacher'],
        attributes: ['id', 'name', 'teacherId']
      })
  .then(function(classes) {
        res.send(classes)

     }).error(function (err) {
         console.log("Error:" + err);
     });
}

exports.addClass = function(req,res) {
  models.Classes.create({
    name: req.body.name,
    teacherId: req.body.teacherId
  }).then((classes) => {
    res.send({
      "id": classes.dataValues.id,
      "code":200,
      "message": `Class ${req.body.name} was added`
    });
  }).catch(function(error){
    res.send({
      "code":400,
      "message": "error occured while adding class"
    });
  });
}

exports.deleteClass = function(req,res) {
  models.Classes.destroy({
      where: {
        id: req.param('id')
     }
   }).then(() => {
    res.send({
      "code":200,
      "message": `Class was deleted`
    });
  }).catch(function(error){
    res.send({
      "code":400,
      "message": "error occured while deleting class"
    });
  });
}

exports.editClass = function(req,res) {
  models.Classes.update({
    name: req.body.name,
    teacherId: req.body.teacherId
  }, {
    where: {
      id: req.param('id')
    }
  }).then(() => {
    res.send({
      "code":200,
      "message": `Class ${req.body.name} was edited`
    });
  }).catch(function(error){
    res.send({
      "error": error,
      "code":400,
      "message": "error occured while editing class"
    });
  });
}

exports.getFreeTeachers = function(req,res){
  let classes = [];
  let teachers = [];
  models.Classes.findAll()
  .then(function(classes) {
    return classes;
  }).then(function(classes) {
  models.Teacher.findAll()
  .then(function(teachers) {
    let freeTeachers = [];
    for(let i = 0; i<teachers.length; i++){
      for(let j = 0; j<classes.length;j++){
          if(teachers[i].id === classes[j].teacherId){
            break;
          }
          if(j === classes.length-1){
            freeTeachers.push(teachers[i]);
          }
      }
    }
    return freeTeachers
     })
     .then(function(teachers) {
       res.send(teachers);
     }).error(function (err) {
         console.log("Error:" + err);
     });
   })
}
