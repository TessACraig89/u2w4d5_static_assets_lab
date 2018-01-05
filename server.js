const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'))
app.use(express.static('public'))

app.listen(3000, () => {
    console.log("I am listening");
});
