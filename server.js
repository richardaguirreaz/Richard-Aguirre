const express = require('express');
const app = express();
const router = express.Router();
require('dotenv').config()

app.get('/api/hola', (req, res) => {
    res.send('Hola Mundo!')
  })

app.listen(process.env.PORT, () => console.log('Server listening on port ' + process.env.PORT));