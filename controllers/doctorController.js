const { Doctor } = require('../models');

exports.getAllDoctors = async (req, res) => {
  const doctors = await Doctor.findAll({ include: 'Specialty' });
  res.json(doctors);
};

exports.createDoctor = async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.status(201).json(doctor);
};
