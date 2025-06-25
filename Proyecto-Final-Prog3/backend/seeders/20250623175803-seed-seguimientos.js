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
   // busqueda dinamica para datos relacionales
   const [usuarios] = await queryInterface.sequelize.query(`SELECT id FROM "Usuarios" WHERE email = 'jime@example.com'`);
   const usuarioId = usuarios[0].id

   const [challenges]= await queryInterface.sequelize.query(`SELECT id FROM "Challenges" WHERE nombre = 'Challenge JUNIO'`);
   const challengeId = challenges[0].id

   await queryInterface.bulkInsert('Seguimientos', [
    {
      usuario_id: usuarioId,
      challenge_id: challengeId,
      dia: new Date('2025-06-01'),
      completado: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      usuario_id: usuarioId,
      challenge_id: challengeId,
      dia: new Date('2025-06-02'),
      completado: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      usuario_id: usuarioId,
      challenge_id: challengeId,
      dia: new Date('2025-06-03'),
      completado: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ]
   )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Seguimientos', null, {});
  }
};
