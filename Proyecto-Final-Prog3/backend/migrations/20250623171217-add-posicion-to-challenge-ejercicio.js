'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('ChallengeEjercicios', 'posicion', {
      type: Sequelize.INTEGER,
      allowNull: false
      
    })
    await queryInterface.addColumn('ChallengeEjercicios', 'dia',{
      type: Sequelize.DATE,
      allowNull: false

    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('ChallengeEjercicios', 'posicion')
    await queryInterface.removeColumn('ChallengeEjercicios', 'dia');
  }
};
