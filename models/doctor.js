module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define("Doctor", {
    name: DataTypes.STRING,
  }, {
    timestamps: false, 
  });

//   Doctor.associate = (models) => {
//     Doctor.belongsTo(models.Specialty, { foreignKey: 'specialty_id' });
//     Doctor.hasMany(models.Appointment, { foreignKey: 'doctor_id' });
//   };

  return Doctor;
};
