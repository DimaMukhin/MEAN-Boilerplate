const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/api');
const app = express();
const port = 3000;

// connecting Angular front-end with express back-end
app.use(express.static(path.join(__dirname, 'dist')));

// setting json parsing of http requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// setting /api route as the default api route of the application
app.use('/api', api);

// all other routes redirect to Angular front-end
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// start listening for requests on the given port
app.listen(port, function(){
    console.log("Server running on port:" + port);
});
