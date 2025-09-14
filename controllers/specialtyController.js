const { Specialty } = require('../models');

// GET /api/specialties - List all specialties
exports.getAllSpecialties = async (req, res) => {
  try {
    const specialties = await Specialty.findAll();
    res.json(specialties);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch specialties' });
  }
};

// POST /api/specialties - Create a new specialty
exports.createSpecialty = async (req, res) => {
  try {
    const specialty = await Specialty.create(req.body);
    res.status(201).json(specialty);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create specialty' });
  }
};
