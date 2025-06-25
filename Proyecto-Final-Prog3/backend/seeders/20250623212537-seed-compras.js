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
   //busqueda dinamica para prod id y usuario id
   const [productos] = await queryInterface.sequelize.query(`SELECT id FROM "Productos" WHERE nombre = 'banda elastica'`);
   const productoId = productos[0].id

   const [usuarios] = await queryInterface.sequelize.query(`SELECT id FROM "Usuarios" WHERE email = 'jime@example.com'`);
   const usuarioId = usuarios[0].id

   await queryInterface.bulkInsert('Compras', [
    {
      usuario_id: usuarioId,
      producto_id: productoId,
      fecha: new Date(),
      cantidad: 1,
      precio_total: 14.99,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      usuario_id: usuarioId,
      producto_id: productoId,
      fecha: new Date(),
      cantidad: 1,
      precio_total: 33.99,
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
    await queryInterface.bulkDelete('Compras', null, {});
  }
};
