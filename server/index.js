const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./controllers');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(router);
app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});