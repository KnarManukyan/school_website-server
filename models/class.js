'use strict';
module.exports = (sequelize, DataTypes) => {
  var Classes = sequelize.define('Classes', {
    name: DataTypes.STRING,
    teacherId: DataTypes.INTEGER
  }, {});
  Classes.associate = function(models) {
    Classes.belongsTo(models.Teacher, {foreignKey: 'teacherId', targetKey: 'id', as: "Teacher"} )
  }
  return Classes;
};
