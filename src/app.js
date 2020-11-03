require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const notesRouter = require('./notes/notes-router');
const foldersRouter = require('./folder/folder-router');

const app = express();

const morganOptn = (NODE_ENV === 'production') ? 'tiny' : 'common';

app.use(morgan(morganOptn));
app.use(helmet());
app.use(cors());
app.use(notesRouter);
app.use(foldersRouter);

// routes ::::::::
//utilized through router.js files

//generic error handler
// app.use('/api/notes/', notesRouter, foldersRouter, (error, req, res, next) =>{
// 	let response = null;
//  	if ( NODE_ENV === 'production' ) {
// 		response = { message : 'server error' };
// 	} else {
// 		console.log(error);
// 		response = { error, message : error.message };
// 	}
// 	res.json(response);
// });


module.exports = app;
