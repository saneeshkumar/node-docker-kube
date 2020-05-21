const express = require('express');
const bodyParser = require('body-parser')
const usersRoutes = require('./routes/users-route')

const app = express();
app.use(usersRoutes);

app.listen(3000, function () {
    console.log("listening on port 3000...");
});
