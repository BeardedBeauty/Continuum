const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
    image: {
        type: String,
        data: Buffer
    },
    name: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ImageSchema', ImageSchema);