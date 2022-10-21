import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load Node modules
//const express = require('express');

// Initialise Express
const app = express();

// Render static files
app.use(express.static('public'));

// Port website will run on
const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}!`));

app.get('/index.css', (req, res) => {
    res.sendFile('./dist/styles/index.css', { root: __dirname });
});