const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DoctorModel = require('./doctor')(sequelize, DataTypes);
const PatientModel = require('./patient')(sequelize, DataTypes);
const AppointmentModel = require('./appointment')(sequelize, DataTypes);
const SpecialtyModel = require('./specialty')(sequelize, DataTypes);

// Define associations
DoctorModel.belongsTo(SpecialtyModel, { foreignKey: 'specialty_id' });
SpecialtyModel.hasMany(DoctorModel, { foreignKey: 'specialty_id' });

DoctorModel.hasMany(AppointmentModel, { foreignKey: 'doctor_id' });
AppointmentModel.belongsTo(DoctorModel, { foreignKey: 'doctor_id' });

PatientModel.hasMany(AppointmentModel, { foreignKey: 'patient_id' });
AppointmentModel.belongsTo(PatientModel, { foreignKey: 'patient_id' });

module.exports = {
  sequelize,
  Doctor: DoctorModel,
  Patient: PatientModel,
  Appointment: AppointmentModel,
  Specialty: SpecialtyModel,
};
