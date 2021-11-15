const express = require('express');
const path = require('path')
const app = express();

const PORT = 3000;

// Letting the application use static files
app.use(express.static(path.join(__dirname, "public")));

// Defining Routes
const dashRouter = require('./controller/dashboard');
const exerciseRouter = require('./controller/workout');
const homeRouter = require('./controller/home');
app.use('/dashboard', dashRouter);
app.use('/exercise', exerciseRouter);
app.use(homeRouter);

app.listen(PORT, () => {
    console.log(`Listening to: http://localhost:${PORT}`)
})