-- ERD (Relationship representation of the Clinic domain)

-- 1. Create the Database
CREATE DATABASE clinic_booking;

USE clinic_booking;

-- 2. Specialties table (doctor specialties)
CREATE TABLE specialties (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- 3. Doctors table (doctor specialties)
CREATE TABLE doctors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    specialty_id INT,
    FOREIGN KEY (specialty_id) REFERENCES specialties(id)
);

-- 4. Patients table (Patient can make appointments: one-to-many)
CREATE TABLE patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- 5. Appointments table (Normalizes patients and doctors tables while acting as a join table between the two)
CREATE TABLE appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date VARCHAR(100),
    prescription TEXT,
    doctor_id INT,
    patient_id INT,
    FOREIGN KEY (doctor_id) REFERENCES doctors(id),
    FOREIGN KEY (patient_id) REFERENCES patients(id)
);
