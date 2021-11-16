const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

const PORT = 3000;

// Letting the application use static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Defining Routes
const dashRouter = require('./controller/dashboard');
const exerciseRouter = require('./controller/workout');
const homeRouter = require('./controller/home');
const apiRouter = require('./controller/api')
app.use('/stats', dashRouter);
app.use('/exercise', exerciseRouter);
app.use('/api', apiRouter)
app.use(homeRouter);

// Connecting to the db
mongoose.connect('mongodb://localhost/fitnessTracker', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
});

// PORT
app.listen(PORT, () => {
    console.log(`Listening to: http://localhost:${PORT}`)
})