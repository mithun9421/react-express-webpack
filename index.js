var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World from expressjs application");
})

app.listen(PORT, (error) => {
    error ? console.log(`Error occured ${error}`) : console.log(`Application started on PORT http://localhost:${PORT}`)
})