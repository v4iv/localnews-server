var express = require('express');
var router = express.Router();
var Place = require('../models/place');
var googleMapsClient = require('../bin/config/googlemapsclient');

router.post('/', function (req, res, next) {
    var placeID = '';
    googleMapsClient.findPlace({input: req.body.searchInput, inputtype: 'textquery'})
        .asPromise()
        .then(response => {
            placeID = response.json.candidates[0].place_id;
            Place.findOne({place_id: placeID}, function (err, place) {
                if (err) return next(err);
                if (place) {
                    res.json(place)
                } else {
                    googleMapsClient.place({placeid: placeID, language: 'en'})
                        .asPromise()
                        .then(response => {
                            Place.create({
                                name: response.json.result.name,
                                place_id: response.json.result.place_id,
                                latitude: response.json.result.geometry.location.lat,
                                longitude: response.json.result.geometry.location.lng
                            }, function (err, place) {
                                if (err) return next(err);
                                res.json(place)
                            })
                        })
                        .catch(err => {
                            return next(err);
                        })
                }
            })
        })
        .catch(err => {
            return next(err);
        })
});

module.exports = router;
