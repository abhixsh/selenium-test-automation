const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    address: { type: String, required: true },
});

module.exports = mongoose.model('Form', FormSchema);
