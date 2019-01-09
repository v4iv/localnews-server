var mongoose = require('mongoose');
var debug = require('debug')('expressapi:database');
mongoose.Promise = require('bluebird');

var connect = () => mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/localnews', {
    useNewUrlParser: true,
    promiseLibrary: require('bluebird')
}).then(() =>
    debug("Connection to database successful")
).catch((err) =>
    console.log(err)
);

module.exports = connect;
