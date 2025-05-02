require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./router/router.js');
const mongooseConnect = require('./config/db.js');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hi, it’s Jayakumar');
});

app.use('/', router);

mongooseConnect();

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(` Server is running at http://0.0.0.0:${PORT}`);
});
