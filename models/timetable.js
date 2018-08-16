'use strict';
module.exports = (sequelize, DataTypes) => {
  var Timetable = sequelize.define('Timetable', {
    courseId: DataTypes.INTEGER,
    weekday: DataTypes.STRING,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING
  }, {});
  Timetable.associate = function(models) {
    Timetable.belongsTo(models.Courses,  {foreignKey: 'courseId', targetKey: 'id', as: "Courses"})
  };
  return Timetable;
};
