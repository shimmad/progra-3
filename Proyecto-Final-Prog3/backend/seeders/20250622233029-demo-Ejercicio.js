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
   await queryInterface.bulkInsert('Ejercicios', [
    {
      nombre: 'DS espalda',
      tipo: 'UpperBody',
      video_url: 'hhttps://www.youtube.com/watch?v=liPjeyTCMo0&list=PLQ9zL_Gg3LNa83MJaFMRkFsmzRouOv_E-&index=1&ab_channel=DanielaSuarez',
      descripcion: 'Daniela suarez, 10min, pilates para espalda',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      nombre: 'DS brazos',
      tipo: 'UpperBody',
      video_url: 'https://www.youtube.com/watch?v=qALziNsH6vM&list=PLQ9zL_Gg3LNa83MJaFMRkFsmzRouOv_E-&index=2&ab_channel=DanielaSuarez',
      descripcion: 'Daniela suarez, 5min, calistenia para brazos',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'DS tren superior',
      tipo: 'UpperBody',
      video_url: 'https://www.youtube.com/watch?v=F_DIWCcdP7Q&list=PLQ9zL_Gg3LNa83MJaFMRkFsmzRouOv_E-&index=3&ab_channel=DanielaSuarez',
      descripcion: 'Daniela suarez, 10min, pilates para parte superior',
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
    await queryInterface.bulkDelete('Ejercicios', null, {});
  }
};
