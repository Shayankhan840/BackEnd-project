const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/myDB');
        console.log("✅ MongoDB Connected Successfully");
    } catch (err) {
        console.log("❌ Connection Failed:", err);
        process.exit(1);
    }
};

module.exports = connectDB;