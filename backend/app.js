const express = require('express');
const app = express();

app.use(express.json());

// routes
const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

// test route
app.get('/', (req, res) => {
    res.send("Backend is running 🚀");
});

module.exports = app;