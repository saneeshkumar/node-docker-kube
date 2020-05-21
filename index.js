const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log("listening on port 3000...");
});

app.get("/api/v1/users", (req, res) => {
    return res.status(200).send({
        success: 'true',
        message: 'users retrieved successfully'
      });
});
