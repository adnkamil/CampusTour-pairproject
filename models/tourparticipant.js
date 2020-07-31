'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TourParticipant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TourParticipant.belongsTo(models.Tour)
      TourParticipant.belongsTo(models.Participant)
    }
  };
  TourParticipant.init({
    TourId: DataTypes.INTEGER,
    ParticipantId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TourParticipant',
  });
  return TourParticipant;
};