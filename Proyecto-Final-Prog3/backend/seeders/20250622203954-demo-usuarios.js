'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      {
        nombre: 'Jimena',
        email: 'jime@example.com',
        password: 'jime123',
        rol: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        nombre: 'Pablo',
        email: 'Pablo@example.com',
        password: 'pablo123',
        rol: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Maria',
        email: 'maria@example.com',
        password: 'maria123',
        rol: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
