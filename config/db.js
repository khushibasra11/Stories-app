// database.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected...');
        console.log('Connecting to MongoDB with URI:', process.env.MONGO_URI);

    } catch (err) {
        console.error('connection error:', err.message);
        process.exit(1); // Exit process with failure
        
    }
};

module.exports = connectDB;