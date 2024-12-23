let express = require("express");
let cors = require("cors");

let app = express();

let port = 3000;

app.use(cors())

app.get("/", (req, res) => {
    res.send(String(Math.random()));
});

app.listen(port, () => {
    console.log('Server is running on port '+ port);
});