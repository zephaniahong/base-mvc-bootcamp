export default function initAppointmentModel(sequelize, DataTypes) {
  return sequelize.define(
    'appointment',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      tripId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'trips',
          key: 'id',
        },
      },
      description: {
        type: DataTypes.STRING,
      },
      mainText: {
        type: DataTypes.STRING,
      },
      secondaryText: {
        type: DataTypes.STRING,
      },
      placeId: {
        type: DataTypes.STRING,
      },
      types: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      start_date: {
        type: DataTypes.DATE,
      },
      end_date: {
        type: DataTypes.DATE,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    },
  );
}
