const express = require('express');
const app = express();
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

// Sync DB
sequelize.sync();

app.use(express.json());

// Routes
app.use('/api/doctors', require('./routes/doctorRoutes'));
app.use('/api/patients', require('./routes/patientRoutes'));
app.use('/api/appointments', require('./routes/appointmentRoutes'));
app.use('/api/specialties', require('./routes/specialtyRoutes'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
