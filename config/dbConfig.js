// DbConfig.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URL;

mongoose.connect(mongoURI, {
  useNewUrlParser: true, // This warning can be ignored for now
  useUnifiedTopology: true, // This warning can be ignored for now
});

const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('MongoDB is connected');
});

connection.on('error', (error) => {
  console.log('MongoDB error', error);
});


export default connection;
