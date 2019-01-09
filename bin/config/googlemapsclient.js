const googleMapsClient = require('@google/maps').createClient({
    key: process.env.GOOGLE_MAPS_API_KEY || 'AIzaSyDRvAIfBXg83O04z45lbqbzzfqltHjaec4',
    Promise: Promise
});

module.exports = googleMapsClient;
