const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

const PORT = process.env.PORT || 3004;
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/continuum";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
app.use(express.urlencoded({ extended: true }));

// require("./routes/bookRoutes.js")(app);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log("port " + PORT));