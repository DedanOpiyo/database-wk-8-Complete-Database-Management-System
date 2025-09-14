module.exports = (sequelize, DataTypes) => {
  const Specialty = sequelize.define('Specialty', {
    name: DataTypes.STRING,
  }, {
    timestamps: false, // disabling createdAt and updatedAt
  });
  return Specialty;
};
