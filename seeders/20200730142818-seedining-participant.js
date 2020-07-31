'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Participants', [{
     first_name: "son",
     last_name: "goku",
     password: "123456",
     createdAt: new Date(),
     updatedAt: new Date()
   }], {})

  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
   return queryInterface.bulkDelete('Participants', null, {})
  }
};
