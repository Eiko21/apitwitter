const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const app = express();
mongoose.connect('mongodb://localhost/twitter');

app.use(express.json());

app.use(morgan('combined'));

const usersRouter = require("./api/users");
app.use("/api/users", usersRouter);

const config = require('./.env');
const options = config[process.env.NODE_ENV];
const PORT = options.port;

app.listen(PORT); 