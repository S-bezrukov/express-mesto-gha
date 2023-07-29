const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');
const { NOT_FOUND_ERROR_STATUS } = require('./utils/constantStatusCode');


const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb');

const app = express();
app.use(express.json());

// app.use(bodyParser.json());

app.use((req, res, next) => {
  req.user = {
    _id: '64c4f6e3a6a40a0befa207c3',
  };

  next();
});

app.use(userRouter);
app.use(cardRouter);
app.use('*', (req, res) => {
  res.status(NOT_FOUND_ERROR_STATUS).send({ message: 'URL не найден' });
});

app.listen(PORT);