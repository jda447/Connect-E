'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Posts', [{
        post: 'This is my first post',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
