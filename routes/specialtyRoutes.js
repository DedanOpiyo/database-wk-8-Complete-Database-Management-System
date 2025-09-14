const express = require('express');
const router = express.Router();
const specialtyController = require('../controllers/specialtyController');

router.get('/', specialtyController.getAllSpecialties);
router.post('/', specialtyController.createSpecialty);

module.exports = router;
