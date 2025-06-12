import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

// Export the app for testing
export default app;

