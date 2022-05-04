import mongoose from 'mongoose';
import  { connectionString }  from './credentials.js';
const { Schema } = mongoose;

// For security, connectionString should be in a separate file and excluded from git



// For security, connectionString should be in a separate file and excluded from git


mongoose.connect(connectionString, {
    dbName: 'Projects',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const seahawksSchema = new Schema({
 name: String,
 number: Number,
 position: String,
 year: Number,
 
});



// define data model as JSON key/value pairs
// values indicate the data type of each key


export const Seahawks = mongoose.model('Seahawks', seahawksSchema, 'Seahawks');