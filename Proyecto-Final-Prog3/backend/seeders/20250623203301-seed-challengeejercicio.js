'use strict';

const { create } = require('lodash');

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
   //voy a tener q implementar busqueda dinamica de challenge por id?
   const [challenge] = await queryInterface.sequelize.query(`SELECT * FROM "Challenges" WHERE "nombre" = 'Challenge JUNIO' ;`);
   const challengeId = challenge[0].id;
   const [ejercicio] = await queryInterface.sequelize.query(`SELECT * FROM "Ejercicios" WHERE "nombre" = 'DS espalda' ;`);
   const ejercicioId = ejercicio[0].id;
   await queryInterface.bulkInsert('ChallengeEjercicios', [
    {
      challenge_id: challengeId,
      ejercicio_id: ejercicioId,
      posicion: 1,
      dia: '2025-06-20',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge_id: challengeId,
      ejercicio_id: ejercicioId,
      posicion: 2,
      dia: '2025-06-21',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge_id: challengeId,
      ejercicio_id: ejercicioId,
      posicion: 3,
      dia: '2025-06-22',
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
    await queryInterface.bulkDelete('ChallengeEjercicios', null, {});
  }
};
