const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// Define routes
app.get("/", (req, res) => {
    res.json({message: "Welcome to Tutorial CRUD application."});
});
require("./app/routes/users.routes.js")(app);
require("./app/routes/booking.routes.js")(app);
require("./app/routes/quiz.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
