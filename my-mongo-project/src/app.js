const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes');
const dbConfig = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
dbConfig();

// Routes
app.use('/api/todos', todoRoutes());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});