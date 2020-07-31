'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Participant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    getFullName(){
      return `${this.first_name} ${this.last_name}`
    }
    static associate(models) {
      // define association here
      Participant.belongsToMany(models.Tour, {through: models.TourParticipant})
    }
  };
  Participant.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Participant',
    hooks: {
      beforeCreate: (instance, options) => {
        if(instance.last_name == '') instance.last_name = instance.first_name
        if(instance.first_name == '') instance.first_name = instance.last_name
      }
    }
  });
  return Participant;
};