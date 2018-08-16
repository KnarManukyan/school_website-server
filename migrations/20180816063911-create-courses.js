'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      classId: {
        type: Sequelize.INTEGER,
          references: {
              model: 'Classes',
              key: 'id',
          },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      teacherId: {
        type: Sequelize.INTEGER,
          references: {
              model: 'Teachers',
              key: 'id',
          },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      endDate: {
        allowNull: false,
        type: Sequelize.DATEONLY
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
    return queryInterface.dropTable('Courses');
  }
};
