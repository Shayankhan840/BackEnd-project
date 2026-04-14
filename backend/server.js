const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');


const app = express();

// connect DB
connectDB();

app.use(express.json());
app.use('/users', userRoutes);

app.listen(5000, () => {
    console.log("🚀 Server running on port 5000");
});

