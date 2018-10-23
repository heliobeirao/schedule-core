var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
var contactsRouter = require('./routes/routes-contacts');

const swaggerDefinition = {
    basePath: '/', // Base path (optional)
};

const options = {
    swaggerDefinition,
    apis: ['./routes/routes-*.js'], // <-- not in the definition, but in the options
};

const swaggerSpec = swaggerJSDoc(options);

var app = express();
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/contacts', contactsRouter);

module.exports = app;
