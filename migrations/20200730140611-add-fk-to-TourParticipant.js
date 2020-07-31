'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('TourParticipants', {
      fields: ['TourId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_TourId',
      references: {
        table: 'Tours',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }).then(() => {
      return queryInterface.addConstraint('TourParticipants', {
        fields: ['ParticipantId'],
        type: 'foreign key',
        name: 'custom_fkey_constraint_ParticipantId',
        references: { //Required field
          table: 'Participants',
          field: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('TourParticipants', 'custom_fkey_constraint_TourId',{})
    .then(() => {
      return queryInterface.removeConstraint('TourParticipants', 'custom_fkey_constraint_ParticipantId',{})
    })
  }
};
