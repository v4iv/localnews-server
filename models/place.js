var mongoose = require('mongoose');

var placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: ['true', 'name is required'],
    },
    place_id: {
        type: String,
        required: ['true', 'place_id is required'],
    },
    latitude: {
        type: String,
        required: ['true', 'latitude is required'],
    },
    longitude: {
        type: String,
        required: ['true', 'longitude is required'],
    },
});

module.exports = mongoose.model('place', placeSchema);
