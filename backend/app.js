// import express from "express";
// import cookieParser from "cookie-parser"; 
// import cors from "cors"; 
// import mongoose from "mongoose"; 
// import dotenv from "dotenv"; 
// import authRoute from './routes/auth.js'

// dotenv.config();


// const app = express();
// const port = process.env.PORT || 5000;

// const corsOptions = {
//   origin: true,
// };
 
// // Simple API route
// app.get("/", (req, res) => {
//   res.send("API is working");
// });

// // Mongoose connection without deprecated options
// mongoose.set('strictQuery', false);

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log('MONGO DATABASE IS CONNECTED');
//   } catch (err) {
//     console.error('MONGO DATABASE IS NOT CONNECTED FAILED:', err);
//   }
// };

// // Middleware
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors(corsOptions));
// app.use('/api/v1/auth/',authRoute)

// // Start the server and connect to the database
// app.listen(port, () => {
//   connectDB();
//   console.log("Server is running on port " + port);
// });



// import express from 'express';
// import { MongoClient } from 'mongodb';
// import dotenv from 'dotenv'; // To load environment variables
// import expressAsyncHandler from 'express-async-handler'; // To handle async errors
// import cors from 'cors';

// dotenv.config();

// const app = express();

// app.use(cors({
//   origin: 'http://localhost:5000'
// }));

// app.use(express.json()); // To parse JSON bodies

// const port = process.env.PORT || 5000;

// const mClient = new MongoClient('mongodb+srv://kp:doc@cluster0.0eelz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// mClient.connect()
//   .then((connectionObj) => {
//     // Connect to database
//     const fsddb = connectionObj.db('MyDB');

//     // Connect to collections
//     const doctorsCollection = fsddb.collection('doctor-data');
//     const patientsCollection = fsddb.collection('patient-data');

//     // Share collection objects with APIs
//     app.set('doctorsCollection', doctorsCollection);
//     app.set('patientsCollection', patientsCollection);

//     console.log("DB connection success");

//     // Define the POST route for /doctor-data
//     app.post('/doct-data', expressAsyncHandler(async (req, res) => {
//       try {
//         const doctorData = req.body;
//         // Check if the doctor already exists
//     const existingDoctor = await doctorsCollection.findOne({ email: doctorData.email });
//     if (existingDoctor) {
//       return res.status(400).send({ message: 'Doctor already exists' });
//     }
//     else{

    
//         const result = await doctorsCollection.insertOne(doctorData);
//         res.status(201).send(result);
//     }
//       } catch (error) {
//         res.status(500).send({ message: 'Error inserting doctor data', error });
//       }
//     }));

//     // Define the POST route for /pat-data
//     app.post('/pati-data', expressAsyncHandler(async (req, res) => {
//       try {
//         const patientData = req.body;
//         // Check if the patient already exists
//     const existingPatient = await patientsCollection.findOne({ email: patientData.email });
//     if (existingPatient) {
//       return res.status(400).send({ message: 'Patient already exists' });
//     }
//     else{

    
//         const result = await patientsCollection.insertOne(patientData);
//         res.status(201).send(result);
//       } 
//     }catch (error) {
//         res.status(500).send({ message: 'Error inserting patient data', error });
//       }
//     }));

//     // Assign port number to HTTP server of express app
//     app.listen(port, () => {
//       console.log("Server is running on port " + port);
//     });
//   })
//   .catch((err) => console.log("Error in DB connection", err));

//   // Ensure the database connection is properly closed when the server shuts down
//   process.on('SIGINT', async () => {
//   await mClient.close();
//   console.log('DB connection closed');
//   process.exit(0);
// });





// import express from 'express';
// import { MongoClient } from 'mongodb';
// import dotenv from 'dotenv'; // To load environment variables
// import expressAsyncHandler from 'express-async-handler'; // To handle async errors
// import cors from 'cors';

// import authRoute from './Routes/auth.js';
// import userRoute from './Routes/user.js';
// import doctorRoute from './Routes/doctor.js';

// import reviewRoute from './Routes/review.js';

// dotenv.config();

// const app = express();

// app.use(cors({
//   origin: 'http://localhost:5000'
// }));

// app.use(express.json()); // To parse JSON bodies



// const port = process.env.PORT || 5000;

// const mClient = new MongoClient('mongodb+srv://kp:doc@cluster0.0eelz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// mClient.connect()
//   .then((connectionObj) => {
//     // Connect to database
//     const fsddb = connectionObj.db('MyDB');

//     // Connect to collections
//     const doctorsCollection = fsddb.collection('doctor-data');
//     const patientsCollection = fsddb.collection('patient-data');

//     // Share collection objects with APIs
//     app.set('doctorsCollection', doctorsCollection);
//     app.set('patientsCollection', patientsCollection);

//     console.log("DB connection success");

//     // Define the POST route for /doctor-data
//     app.post('/doct-data', expressAsyncHandler(async (req, res) => {
//       try {
//         const doctorData = req.body;
//         // Check if the doctor already exists
//     const existingDoctor = await doctorsCollection.findOne({ email: doctorData.email });
//     if (existingDoctor) {
//       return res.status(400).send({ message: 'Doctor already exists' });
//     }
//     else{
    
//         const result = await doctorsCollection.insertOne(doctorData);
//         res.status(201).send(result);
//     }
//       } catch (error) {
//         res.status(500).send({ message: 'Error inserting doctor data', error });
//       }
//     }));

//     // Define the POST route for /pat-data
//     app.post('/pati-data', expressAsyncHandler(async (req, res) => {
//       try {
//         const patientData = req.body;
//         // Check if the patient already exists
//     const existingPatient = await patientsCollection.findOne({ email: patientData.email });
//     if (existingPatient) {
//       return res.status(400).send({ message: 'Patient already exists' });
//     }
//     else{

    
//         const result = await patientsCollection.insertOne(patientData);
//         res.status(201).send(result);
//       } 
//     }catch (error) {
//         res.status(500).send({ message: 'Error inserting patient data', error });
//       }
//     }));

//     // Assign port number to HTTP server of express app
//     app.listen(port, () => {
//       console.log("Server is running on port " + port);
//     });
//   })
//   .catch((err) => console.log("Error in DB connection", err));

//   // Ensure the database connection is properly closed when the server shuts down
//   process.on('SIGINT', async () => {
//   await mClient.close();
//   console.log('DB connection closed');
//   process.exit(0);
// });


// //middlewares
// app.use("/api/v1/auth",authRoute);
// app.use("/api/v1/user",userRoute);
// app.use("/api/v1/doctors",doctorRoute);
// app.use("/api/v1/reviews",reviewRoute);

import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv'; // To load environment variables
import expressAsyncHandler from 'express-async-handler'; // To handle async errors
import cors from 'cors';

import authRoute from './Routes/auth.js';
import userRoute from './Routes/user.js';
import doctorRoute from './Routes/doctor.js';
import reviewRoute from './Routes/review.js';

dotenv.config();

const app = express();

// Use CORS middleware to allow requests from your frontend's origin
// app.use(cors({
//   origin: 'http://localhost:5000' // Allow requests from this origin
// }));

app.use(cors());

app.use(express.json()); // To parse JSON bodies

const port = process.env.PORT || 5000;

const mClient = new MongoClient('mongodb+srv://kp:doc@cluster0.0eelz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

mClient.connect()
  .then((connectionObj) => {
    // Connect to database
    const fsddb = connectionObj.db('MyDB');

    // Connect to collections
    const doctorsCollection = fsddb.collection('doctor-data');
    const patientsCollection = fsddb.collection('patient-data');

    // Share collection objects with APIs
    app.set('doctorsCollection', doctorsCollection);
    app.set('patientsCollection', patientsCollection);

    console.log("DB connection success");

    // Define the POST route for /register
    app.post('/register', expressAsyncHandler(async (req, res) => {
      try {
        const { name, email, password, role, contact, age, gender, specialization, hospital, address } = req.body;
    
        if (!name || !email || !password || !role || !contact || !age || !gender) {
          return res.status(400).send({ message: 'All fields are required' });
        }
    
        const existingUser = await (role === 'doctor' ? doctorsCollection : patientsCollection).findOne({ email });
        if (existingUser) {
          return res.status(400).send({ message: `${role.charAt(0).toUpperCase() + role.slice(1)} already exists` });
        }
    
        const newUser = {
          name,
          email,
          password,
          contact,
          age,
          gender,
          ...(role === 'doctor' ? { specialization, hospital } : { address })
        };
    
        const result = await (role === 'doctor' ? doctorsCollection : patientsCollection).insertOne(newUser);
        res.status(201).send({ success: true, user: result.ops[0] });
      } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send({ message: 'Error registering user', error });
      }
    }));
    
    // Define the POST route for /doct-data
    app.post('/doct-data', expressAsyncHandler(async (req, res) => {
      try {
        const doctorData = req.body;
        // Check if the doctor already exists
        const existingDoctor = await doctorsCollection.findOne({ email: doctorData.email });
        if (existingDoctor) {
          return res.status(400).send({ message: 'Doctor already exists' });
        } else {
          const result = await doctorsCollection.insertOne(doctorData);
          res.status(201).send(result);
        }
      } catch (error) {
        res.status(500).send({ message: 'Error inserting doctor data', error });
      }
    }));

    // Define the POST route for /pati-data
    app.post('/pati-data', expressAsyncHandler(async (req, res) => {
      try {
        const patientData = req.body;
        // Check if the patient already exists
        const existingPatient = await patientsCollection.findOne({ email: patientData.email });
        if (existingPatient) {
          return res.status(400).send({ message: 'Patient already exists' });
        } else {
          const result = await patientsCollection.insertOne(patientData);
          res.status(201).send(result);
        }
      } catch (error) {
        res.status(500).send({ message: 'Error inserting patient data', error });
      }
    }));

    // Assign port number to HTTP server of express app
    app.listen(port, () => {
      console.log("Server is running on port " + port);
    });
  })
  .catch((err) => console.log("Error in DB connection", err));

  // Ensure the database connection is properly closed when the server shuts down
  process.on('SIGINT', async () => {
    await mClient.close();
    console.log('DB connection closed');
    process.exit(0);
  });

//middlewares
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/user",userRoute);
app.use("/api/v1/doctors",doctorRoute);
app.use("/api/v1/reviews",reviewRoute);