const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8558;
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'))

app.listen(PORT, () => {console.log(`Listening on localhost at port: ${PORT}`)});