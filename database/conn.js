const mongoose = require('mongoose');

const URI = "mongodb+srv://blogAdmin:1234567890@cluster0.7xp98.mongodb.net/myBlog"

const connectDB = async() => {
    await mongoose.connect(URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    console.log('db connected')
}

module.exports = connectDB;