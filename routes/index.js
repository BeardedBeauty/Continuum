const router = require("express").Router();
const images = require("./api/index.js");

// user routes
router.use("/api", images);

module.exports = router;