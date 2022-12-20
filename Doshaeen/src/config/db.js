const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;

module.exports = () =>{
    return mongoose.connect(MONGO_URI)
};