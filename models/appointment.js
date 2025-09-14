module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    date: DataTypes.STRING,
    prescription: DataTypes.TEXT,
  }, {
    timestamps: false, 
  });
  return Appointment;
};
