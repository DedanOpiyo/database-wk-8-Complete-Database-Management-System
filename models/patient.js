module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    name: DataTypes.STRING,
  }, {
    timestamps: false, 
  });
  return Patient;
};
