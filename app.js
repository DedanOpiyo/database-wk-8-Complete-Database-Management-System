const express = require('express');
const app = express();
const cors = require('cors');
const { sequelize } = require('./models');

const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'http://localhost:8000',
  'http://localhost:3000',
  'http://localhost:3001',
  'https://your-deployed-frontend-url.com' // Add production URL if needed
];
const PORT = process.env.PORT || 3000;

// Sync DB
sequelize.sync();

app.use(express.json());
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);

    if (ALLOWED_ORIGINS.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// Routes
app.get('/', (req, res) => {
  res.send('[Home Page] Clinic booking API running');
}); 

app.use('/api/doctors', require('./routes/doctorRoutes'));
app.use('/api/patients', require('./routes/patientRoutes'));
app.use('/api/appointments', require('./routes/appointmentRoutes'));
app.use('/api/specialties', require('./routes/specialtyRoutes'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
