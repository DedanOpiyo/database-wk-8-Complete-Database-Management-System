const { Appointment, Doctor, Patient } = require('../models');

exports.getAllAppointments = async (req, res) => {
  const appointments = await Appointment.findAll({
    include: [Doctor, Patient],
  });
  res.json(appointments);
};

exports.createAppointment = async (req, res) => {
  const appointment = await Appointment.create(req.body);
  res.status(201).json(appointment);
};
