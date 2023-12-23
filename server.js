// server.js
import express from 'express';
import dotenv from 'dotenv';
import connection from './Config/DbConfig.js'; // Import the connection object
import userRoute from './routes/userRoute.js';

dotenv.config();

// No need to call DbConfig() as it's not a function

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/user', userRoute);

app.listen(port, () => console.log(`Listening on port ${port}`));
