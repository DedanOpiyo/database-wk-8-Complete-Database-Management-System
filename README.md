# Clinic Booking System

This project demonstrate SQL concepts in real application set-up where we interact with mySQL database through backend
(in this case Node.js).  
The Relational Representation of the models or database tables is available in the referenceFile folder `ERD.sql`.

### Relationships Based the Schema

Doctors to Specialties is a `many-to-one` relationship (doctors.specialty_id is a foreign key to specialties.id).  
Many doctors can be associated with a specialty.  
The reverse is true for specialties. Each specialty can be associated with many doctors (thus `one-to-many` relationship in this case)

Doctors to Appointments is a `One-to-Many` relationship. A doctor can have many appointments.

Appointments to Patients is a `One-to-Many` relationship. Each appointment is assigned to one patient. Inversely, each patient can have many appointments.

Doctors to Patients is a `Many-to-Many` relationship (aldhough there’s no direct FK, but they are connected via appointments - as the junction table). 

### Summary of the relationships

| Relationship                              | Type                |
| ----------------------------------------- | ------------------- |
| **Specialties -> Doctors**                 | One-to-Many (1:N)  |
| **Doctors -> Specialties**                 | Many-to-One (N:1)   |
| **Doctors -> Appointments**                | One-to-Many (1:N)  |
| **Patients -> Appointments**               | One-to-Many (1:N)  |
| **Doctors <-> Patients (via Appointments)** | Many-to-Many (M:N) |

The Entity Relationship Diagram (ERD):  
[View ERD on dbdiagram.io](https://dbdiagram.io/d/68c6e098841b2935a680d931)

## Project Folder Structure

```
clinic-booking-system/
│
├── models/
│   ├── doctor.js
│   ├── patient.js
│   ├── appointment.js
│   └── specialty.js
│
├── routes/
│   ├── doctorRoutes.js
│   ├── patientRoutes.js
│   ├── appointmentRoutes.js
│
├── controllers/
│   ├── doctorController.js
│   ├── patientController.js
│   ├── appointmentController.js
│
├── config/
│   └── database.js
│
├── postman/
│    └── Wk-8-Clinic-Booking-System.postman_collection.json
│
├── db/
│   └── clinic_booking_backup.sql
│
├── app.js
├── package.json
└── README.md

```

## Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/DedanOpiyo/database-wk-8-Complete-Database-Management-System.git
   cd clinic-booking-system

2. Install dependencies:
   ```bash
   npm install
   ```
3. Create MySQL database:  
  ```
  Import clinic_schema.sql into your MySQL server
  ```

4. Run the server:  
   ```bash
   node app.js
   ```

## API Endpoints
### Doctors

- GET /api/doctors - List all doctors
- POST /api/doctors - Create a new doctor

### Patients

- GET /api/patients
- POST /api/patients

### Appointments

- GET /api/appointments
- POST /api/appointments

## Postman Collection

You can test all API endpoints using the provided Postman collection.

[Download the Postman Collection](./postman/clinic-booking-api.postman_collection.json)

To import it into Postman:
1. Open Postman.
2. Click `Import`.
3. Upload the JSON file.
4. Start making requests to the API!

## To backup the database

Use the command:
```
mysqldump -u root -p -B clinic_booking > path_to_backup_file
```

**Note:** replace root with your username if it's not root and path_to_backup_file with the actual path to the directory where you need the backup downloaded.
In case MySQL bin folder is not added to your system's PATH environment variable. or you get the Error: 'mysqldump' is not recognized...  ,   
Run mysqldump Using Full Path.  

if installed, MySQL tools like mysqldump are in the bin folder, usually at: `C:\Program Files\MySQL\MySQL Server 8.0\bin\`

There fore the full command below `"C:\Users\dedan\OneDrive\Desktop\clinic-booking-system\db\clinic_booking_backup.sql"` is a full path name in my case.

```bash
& "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqldump.exe" -u root -p -B clinic_booking > "C:\Users\dedan\OneDrive\Desktop\clinic-booking-system\db\clinic_booking_backup.sql"
```

You can download the MySQL database backup here:

[Download clinic_booking_backup.sql](./db/clinic_booking_backup.sql)

To restore:
```bash
mysql -u root -p < clinic_booking_backup.sql
```

Backup is not necessary, but it could be relevant under the circumstances:  
- Rrestorstion of operations  
- Database migration and  
- Transfer of databases between servers.