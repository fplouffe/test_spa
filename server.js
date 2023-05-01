
/*
    Sample Single Page Application (SPA) as per tutorial https://learn.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-javascript-auth-code
*/


const express = require('express');
const morgan = require('morgan');
const path = require('path');

const DEFAULT_PORT = process.env.PORT || 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.static('app'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(DEFAULT_PORT, () => {
    console.log(`Server listening on port ${DEFAULT_PORT}`);
});
