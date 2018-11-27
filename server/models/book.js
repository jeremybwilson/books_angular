const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
    id: {
        type: Number
    },
    title: {
        type: String,
        required: [true, 'Please enter a book title'],
        trim: true,
    },
    author: {
        type: String,
        required: [true, 'Please enter an author name'],
        trim: true
    },
    pages: {
        type: Number,
        required: [true, 'Please enter the number of pages'],
    },
    publication_year: {
        type: Number,
        required: [true, 'Please enter a publication year'],
        min: [4, 'Please use a 4-digit year'], 
    },
    publisher: {
        type: String,
        required: [true, 'Please enter a publisher'],
        trim: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Book', BookSchema);