'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn('Tours', 'UniversityId', {
      type: Sequelize.INTEGER,
      references: {
        model: "Universities",
        key: "id"
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeColumn('Tours', 'UniversityId')
  }
};