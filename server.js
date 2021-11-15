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
app.use('/dashboard', dashRouter);
app.use('/exercise', exerciseRouter);
app.use(homeRouter);

mongoose.connect('mongodb://localhost/fitnessTracker', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
});

app.listen(PORT, () => {
    console.log(`Listening to: http://localhost:${PORT}`)
})