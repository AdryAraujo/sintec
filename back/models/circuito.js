'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Circuito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Circuito.init({
    cd_circuito: DataTypes.BIGINT,
    nr_velocidade: DataTypes.STRING,
    nr_circuito: DataTypes.STRING,
    fl_circuito_ativo: DataTypes.BOOLEAN,
    cd_user_inclusao_circuito: DataTypes.BIGINT,
    dt_alteracao_circuito: DataTypes.DATE,
    dt_inclusao_circuito: DataTypes.DATE,
    cd_user_alteracao_circuito: DataTypes.BIGINT,
    fk_conta_cd_conta: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Circuito',
  });
  return Circuito;
};