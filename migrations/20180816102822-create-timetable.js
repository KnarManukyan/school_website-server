'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Timetables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      courseId: {
        allowNull: false,
        type: Sequelize.INTEGER,
          references: {
              model: 'Courses',
              key: 'id',
          },
        onUpdate: 'CASCADE'
      },
      weekday: {
        allowNull: false,
        type: Sequelize.STRING
      },
      startTime:{
        allowNull: false,
        type: Sequelize.STRING
      },
      endTime:{
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Timetables');
  }
};
