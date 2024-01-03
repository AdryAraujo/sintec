'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Circuitos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cd_circuito: {
        type: Sequelize.BIGINT
      },
      nr_velocidade: {
        type: Sequelize.STRING
      },
      nr_circuito: {
        type: Sequelize.STRING
      },
      fl_circuito_ativo: {
        type: Sequelize.BOOLEAN
      },
      cd_user_inclusao_circuito: {
        type: Sequelize.BIGINT
      },
      dt_alteracao_circuito: {
        type: Sequelize.DATE
      },
      dt_inclusao_circuito: {
        type: Sequelize.DATE
      },
      cd_user_alteracao_circuito: {
        type: Sequelize.BIGINT
      },
      fk_conta_cd_conta: {
        type: Sequelize.BIGINT
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
    await queryInterface.dropTable('Circuitos');
  }
};