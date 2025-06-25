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
   await queryInterface.bulkInsert('Productos', [
    {
      nombre: 'mancuernas de pilates 2kg',
      descripcion: 'mancuernas violates de 2kg',
      precio: 11.99,
      img: 'https://example.com/product1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      nombre: 'banda elastica',
      descripcion: 'banda para entrenar lowerbody',
      precio: 14.99,
      img: 'https://example.com/product2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      nombre: 'colchoneta de yoga ',
      descripcion: 'colchoneta de yoga',
      precio: 39.99,
      img: 'https://example.com/product3.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'mancuernas de pilates 5kg',
      descripcion: 'mancuernas violates de 5kg',
      precio: 20.99,
      img: 'https://example.com/product4.jpg',
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
    await queryInterface.bulkDelete('Productos', null, {});
  }
};
