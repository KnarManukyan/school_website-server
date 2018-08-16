'use strict';
module.exports = (sequelize, DataTypes) => {
  var Courses = sequelize.define('Courses', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    classId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY
  }, {});
  Courses.associate = function(models) {
    Courses.belongsTo(models.Classes, {foreignKey: 'classId', targetKey: 'id', as: "Classes"} )
    Courses.belongsTo(models.Teacher, {foreignKey: 'teacherId', targetKey: 'id', as: "Teacher"} )
  };
  return Courses;
};
