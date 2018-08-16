'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    classId: DataTypes.INTEGER
  }, {});
  Student.associate = function(models) {
    Student.belongsTo(models.Classes, {foreignKey: 'classId', targetKey: 'id', as: "Classes"});
  };
  return Student;
};
