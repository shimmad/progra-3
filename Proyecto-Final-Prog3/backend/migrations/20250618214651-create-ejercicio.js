'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ejercicios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false

      },
      tipo: {
        type: Sequelize.ENUM('UpperBody','LowerBody','FullBody','Flexibility'),
        allowNull: false

      },
      video_url: {
        type: Sequelize.STRING,
        allowNull: false

      },
      descripcion: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ejercicios');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Ejercicios_tipo";'); //borra el enum al hacer rollback
  }
};