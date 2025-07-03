const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
  res.send(`
    <h1>Hello, AWS EC2!</h1>
    <p>Welcome to my Node.js app.</p>
    <a href="/about">About</a> | <a href="/api/info">API Info</a>
  `);
});

// About route
app.get('/about', (req, res) => {
  res.send('<h2>About Page</h2><p>This app is deployed on AWS EC2 using GitHub Actions!</p>');
});

// API route returning JSON
app.get('/api/info', (req, res) => {
  res.json({
    name: "My Node App",
    environment: process.env.NODE_ENV || "development",
    deployedAt: new Date().toISOString()
  });
});

module.exports = app;

