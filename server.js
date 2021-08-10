const express = require('express');
const path = require('path');
const faker = require('faker');

console.log(faker.company.companyName());
console.log(faker.company.companyName());

const app = express();

app.use('/dist', express.static(path.join(__dirname, 'dist')));
//app.use('/src', express.static(path.join(__dirname, 'src')));
//app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));