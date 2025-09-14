const { Patient } = require('../models');

exports.getAllPatients = async (req, res) => {
  const patients = await Patient.findAll();
  res.json(patients);
};

exports.createPatient = async (req, res) => {
  const patient = await Patient.create(req.body);
  res.status(201).json(patient);
};
