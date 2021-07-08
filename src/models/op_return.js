'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class op_return extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  op_return.init({
    op_return: { type: DataTypes.BLOB },
    txhash: { type: DataTypes.TEXT, unique: true },
    blockhash: DataTypes.TEXT,
    blockheight: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'op_return',
  });
  return op_return;
};