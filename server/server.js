const express = require('express');
const cors = require('cors');
app = express();
const PORT = 5000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(function(req, res) {
    res.json({
        message: 'Welcome to forum!',
    });
});

app.use(function(req, res, next) {});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});