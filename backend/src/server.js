const connect = require('./configs/db');
const app = require('./index');
const path = require("path");

// const port = process.env.PORT || 4500;
app.listen( 4500 , async (req, res) => {
    await connect();
    console.log(`Listening on PORT 4500`)
})