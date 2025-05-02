const mongoose = require('mongoose');
require('dotenv').config(); 

const MONGOOSE_URL = process.env.MONGOOSE_KEY; 
const mongooseConnect = async () => {
    try {
        await mongoose.connect(MONGOOSE_URL);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the process if connection fails
    }
};

module.exports = mongooseConnect;
