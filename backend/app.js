const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');

// middlewares
const routePosts = require('./routes/posts');
const routeUsers = require('./routes/users');
const routeSources = require('./routes/sources');
const routeCategories = require('./routes/categories');

app.use(bodyParser.json());
app.use(cors());

app.use('/posts', routePosts);
app.use('/users', routeUsers);
app.use('/sources', routeSources);
app.use('/categories', routeCategories);

// routes
// app.get('/', (req, res) => {
//   res.send('we are on home')
// })

// app.get('/posts', (req, res) => {
//   res.send('we are on posts')
// });

mongoose.connect(process.env.DB_CONNECTION, () => { console.log(`connected to db`) });

// to listen
app.listen(3000)


// mongodb+srv://ansarinaeemakhtar:ruOtsoNwzb3wSHFA@cluster0.tdqzoxy.mongodb.net/test

// mongodb+srv://ansarinaeemakhtar:ruOtsoNwzb3wSHFA@cluster0.tdqzoxy.mongodb.net/?retryWrites=true&w=majority