'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Challenges', [
    {
      nombre: 'Challenge JUNIO',
      descripcion: 'nivel intermedio ',
      fecha_inicio: new Date('2025-06-01'),
      fecha_fin: new Date('2025-06-30'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Challenge MAYO',
      descripcion: 'nivel intermedio ',
      fecha_inicio: new Date('2025-05-01'),
      fecha_fin: new Date('2025-05-30'),
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Challenges', null, {});
  }
};
