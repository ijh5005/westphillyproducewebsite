const express = require('express');
const app = express();
const port = 3001;
app.listen(port, () => {
  console.log('server started on port' + port);
});

const path = require('path');

//routes
const routes = require('./routes/index');

app.use('/', routes);
app.use(express.static(path.join(__dirname, './public')));

module.exports = app;
