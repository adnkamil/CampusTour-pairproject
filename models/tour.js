'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tour.belongsTo(models.University, {foreignKey: 'UniversityId'})
      Tour.belongsToMany(models.Participant, {through: models.TourParticipant})
    }
  };
  Tour.init({
    name_tour: DataTypes.STRING,
    date: DataTypes.DATE,
    UniversityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tour',
  });
  return Tour;
};