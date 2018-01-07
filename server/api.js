const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

/**
 * Connecting to database
 */
const db = "mongodb://localhost:27017/local";
mongoose.Promise = require('bluebird');
mongoose.connect(db, function(err){
    if(err){
        console.error("Error! " + err);
    }
});

/**
 * API Health status
 */
router.get('/', (req, res) => {
  res.status(200).send('ok');
});

// setting up all api routes
require('./routes/student.route')(router);
require('./routes/course.route')(router);

// development playground
// require('./playground');

module.exports = router;
