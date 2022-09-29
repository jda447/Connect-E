'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('UserDetails', [{
      name: 'John',
      position: 'Manager',
      hobbies: 'Swimming',
      imageUrl: 'ImageUrl',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('UserDetails', null, {});
  }
};
