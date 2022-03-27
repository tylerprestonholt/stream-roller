const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));

  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
  });
}

app.get('/search', (req,res) => {
  console.log('Search route triggered!');
  res.status(200);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
